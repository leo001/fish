class Fish extends egret.DisplayObjectContainer {
	public strategy: ISwim;
	public type: number;
	public tail: egret.MovieClip;
	public scale: number;

	public constructor(s: ISwim, type: number) {
		super();

		this.type = type;
		this.addChild(new egret.Bitmap(RES.getRes('fish_h' + type + '_png')));
		this.tail = McManager.inst.getFish(type);
		this.addChild(this.tail);

		this.anchorOffsetX = FishConst.info[type].anchorX;
		this.anchorOffsetY = Math.round(this.tail.height * .5);

		this.scale = FishConst.info[type].scale;
		this.scaleX = this.scaleY = this.scale;

		this.strategy = s;

	}
	public setSwim(s: ISwim): void {
		if (this.strategy) {
			this.strategy.dispose();
		}
		this.strategy = s;
	}

	public swim(): void {
		this.tail.play(-1);
		this.strategy.swim(this);
	}
	//=============================================================================================
	private _dir: number = GameConst.NO_DIR;

	public set dir(d: number) {
		if (this._dir != d) {
			this._dir = d;
			(GameConst.LEFT == d) ? this.scaleX = this.scale : this.scaleX = -this.scale;
		}
	}
	public get dir(): number {
		return this._dir;
	}
	//=============================================================================================
	//鱼的上钩位置(posX,posY)
	public shanggou(posX: number, posY: number, cb: Function): void {

		egret.Tween.removeTweens(this);

		//调整鱼的方向
		this.dir = (this.x < posX) ? GameConst.RIGHT : GameConst.LEFT;

		//游到钩子下
		egret.Tween.get(this).to({ x: posX }, 1000, egret.Ease.cubicOut).call(() => {
			//计算旋转角度
			var deg = (GameConst.LEFT == this.dir) ? 90 : -90;
			//跳到钩子上
			egret.Tween.get(this).to({ y: posY, rotation: deg }, 1000, egret.Ease.cubicOut).call(() => {
				//
				cb.apply(null, [this.x, this.y]);
			});
		});



	}
}