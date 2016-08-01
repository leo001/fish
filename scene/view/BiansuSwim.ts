class BiansuSwim implements ISwim {
	public constructor() {
	}

	public fish: Fish;
	public swim(fish: Fish): void {
		this.fish = fish;

		//游一圈
		this.swimTo();
	}

	public swimTo(): void {
		//随机一个中间点->确定方向
		var posX = Rand.rand(200, 440);
		this.fish.dir = (this.fish.x < posX) ? GameConst.RIGHT : GameConst.LEFT;
		//随机一个时间
		var time = Rand.rand(1000, 3000);
		var waitTime = Rand.rand(1000, 2000);
		var self = this;
		//游过去
		egret.Tween.get(this.fish).to({ x: posX }, time, egret.Ease.sineOut).
			//停留一个时间
			wait(waitTime).call(() => {
				self.swimContinue();
			});

	}

	public swimContinue(): void {
		var dir = Rand.rand(0, 1);
		this.fish.dir = dir;
		var posX = (GameConst.LEFT == dir) ? 0 - this.fish.anchorOffsetX : Lyrs.inst.W + this.fish.anchorOffsetX;
		//随机一个时间
		var time = Rand.rand(1000, 3000);
		var waitTime = Rand.rand(1000, 2000);
		//游过去
		egret.Tween.get(this.fish).to({ x: posX }, time, egret.Ease.sineOut).wait(waitTime).call(() => {
			//重复
			this.swimTo();
		});
	}
	public dispose(): void {
		this.fish = null;
	}
}