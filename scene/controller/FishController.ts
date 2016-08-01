class FishController extends egret.EventDispatcher {
	public s: FishScene;
	public fishArr: Fish[];
	private shanggouFishArr: Fish[];

	public constructor(s: FishScene) {
		super();

		this.s = s;
		this.fishArr = [];
		this.shanggouFishArr = [];
	}

	public initFish(): void {
		var fish: Fish;
		var dir: number;
		var strategy: ISwim;
		var arr: any = [];
		var fishNum;
		for (var i = 0, len = FishConst.info.length; i < len; i++) {
			fishNum = FishConst.info[i].num;
			for (var j = 0; j < fishNum; j++) {
				if (FishConst.YUN_SU == FishConst.info[i].swim) {
					strategy = new YunsuSwim();
				} else {
					strategy = new BiansuSwim();
				}

				fish = new Fish(strategy, i);
				dir = Rand.rand(0, 1);
				fish.dir = dir;
				//鱼向右->鱼的位置在左边，反之亦然
				fish.x = (GameConst.RIGHT == dir) ? 0 - fish.anchorOffsetX : Lyrs.inst.W + fish.anchorOffsetX;
				fish.y = Rand.rand(480, Lyrs.inst.H - 172);//fish.y = Rand.rand(380, 964);			
				fish.swim();
				arr.push(fish);
				this.s.addChild(fish);
			}
		}

		// for (var i = 0; i < 12; i++) {
		// 	//4条小彩鱼
		// 	//3条小丑鱼
		// 	//2条蝴蝶鱼
		// 	//1条海南红鱼
		// 	//1条鮟鱇鱼
		// 	//1条大鲨鱼
		// 	strategy = new YunsuSwim();
		// 	fish = new Fish(strategy, 0);
		// 	dir = Rand.rand(0, 1);
		// 	fish.dir = dir;
		// 	if (GameConst.LEFT == dir) {
		// 		fish.x = Lyrs.inst.W + fish.anchorOffsetX;
		// 	} else {
		// 		fish.x = 0 - fish.anchorOffsetX;
		// 	}
		// 	fish.y = Rand.rand(480, 960);//fish.y = Rand.rand(380, 964);			
		// 	fish.swim();
		// 	arr.push(fish);
		// 	this.s.addChild(fish);
		// }
		this.fishArr.push(arr);
	}


	public shanggou(data: any[]): void {
		//得到所有上钩的鱼
		var obj: any;
		var fish: Fish;

		this.shanggouFishArr.length = 0;
		for (var i = 0, len = data.length; i < len; i++) {
			obj = data[i];
			for (var ai = 0, alen = obj.num; ai < alen; ai++) {
				fish = this.fishArr[obj.type][ai];
				this.shanggouFishArr.push(fish);
			}
		}

		//
		var yuer = this.s.yuer;
		var self = this;
		var arr: Fish[] = Copy.copy(this.shanggouFishArr);

		nextFish(yuer.x + Math.round(yuer.width * .5), yuer.y + yuer.height - 20);

		function nextFish(posX, posY) {
			fish = self.shanggouFishArr.shift();
			if (fish) {
				fish.shanggou(posX, posY + fish.anchorOffsetX * fish.scale, nextFish);
			} else {
				self.freeFish(arr);
				self.dispatchEventWith(MyEvent.ALL_FISH_SHANG_GOU);
			}
		}
	}

	private freeFish(arr: Fish[]): void {
		var fish: Fish;
		for (var i = 0, len = arr.length; i < len; i++) {
			fish = arr[i];
			fish.rotation = 0;
			if (GameConst.LEFT == fish.dir) {
				fish.x = Lyrs.inst.W + fish.anchorOffsetX;
			} else {
				fish.x = 0 - fish.anchorOffsetX;
			}
			fish.y = Rand.rand(480, Lyrs.inst.H - 172);//fish.y = Rand.rand(380, 964);		
			fish.swim();
		}
	}
}