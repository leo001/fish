class YunsuSwim implements ISwim {
	public constructor() {
	}

	public fish: Fish;
	public swim(fish: Fish): void {
		this.fish = fish;

		//游一圈
		this.swimALap();
	}

	public swimALap(): void {
		var dir;

		//随机一个中间点->确定方向
		var posX = Rand.rand(200, 440);
		this.fish.dir = (this.fish.x < posX) ? GameConst.RIGHT : GameConst.LEFT;
		//随机一个时间
		var time = Rand.rand(1000, 3000);
		//游过去

		egret.Tween.get(this.fish).to({ x: posX }, time, egret.Ease.cubicOut).
			//停留一个时间
			wait(2000).call(() => {
				//随机方向->得到终点
				dir = Rand.rand(0, 1);
				this.fish.dir = dir;
				posX = (GameConst.LEFT == dir) ? 0 - this.fish.anchorOffsetX : Lyrs.inst.W + this.fish.anchorOffsetX;
				//随机一个时间
				time = Rand.rand(1000, 3000);
				//游过去
				egret.Tween.get(this.fish).to({ x: posX }, time, egret.Ease.cubicOut).wait(1500).call(() => {
					//重复
					this.swimALap();
				});
			});

	}

	public dispose(): void {
		this.fish = null;
	}
}