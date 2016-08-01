class GanController {
	public constructor(yuer: egret.Bitmap, cat: egret.MovieClip) {
		this.yuer = yuer;
		this.cat = cat;
	}

	private detaY: number;

	public yuer: egret.Bitmap;
	public cat: egret.MovieClip;
	public yuer_pos_shougan:number = 233;
	public yuer_pos_chugan:number = 343;
	//===============================================================================
	public chugan(): void {
		Locker.inst.add();

		this.cat.play(-1);
		egret.Tween.get(this.yuer).to({ y: this.yuer_pos_chugan }, 1000, egret.Ease.sineIn).call(this.chuganCompelete, this);
	}
	private chuganCompelete(): void {
		this.cat.gotoAndStop(1);
		
		var proxy: ChuganProxy = new ChuganProxy();
		proxy.chugan();
	}
	//===============================================================================
	public shougan(): void {
		this.cat.play(-1);
		egret.Tween.get(this.yuer).to({ y: this.yuer_pos_shougan }, 1000, egret.Ease.sineIn).call(this.shouganComplete, this);
	}

	private shouganComplete(): void {
		Locker.inst.remove();

		this.cat.gotoAndStop(1);		
	}
}