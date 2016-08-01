class YunsuSwim implements ISwim {
	public constructor() {
	}

	public fish: Fish;
	public swim(fish: Fish): void {
		this.fish = fish;

		//游一圈
		this.swimTo();
	}

	public swimTo(): void {
		//根据方向得到终点		
		var posX = (GameConst.LEFT == this.fish.dir) ? 0 - this.fish.anchorOffsetX : Lyrs.inst.W + this.fish.anchorOffsetX;
		//随机一个时间
		var time = 5000;
		//游过去
		var self = this;
		egret.Tween.get(this.fish).to({ x: posX }, time).
			//停留一个时间
			wait(2000).call(() => {
				self.swimBack();
			});
	}

	public swimBack(): void {
		//改变方向
		if (GameConst.LEFT == this.fish.dir) {
			this.fish.dir = GameConst.RIGHT;
		} else {
			this.fish.dir = GameConst.LEFT;
		}
		this.swimTo();
	}

	public dispose(): void {
		this.fish = null;
	}
}