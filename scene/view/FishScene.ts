class FishScene extends eui.Component {
	public constructor() {
		super();

		this.skinName = FishSceneSkin;
	}

	public bottom_gr: eui.Group;
	public chugan_btn: eui.Button;
	public chooseChip_img: eui.Image;
	public tuoguan_btn: eui.Button;
	public chooseChip_lb: eui.BitmapLabel;

	public jiangbei_btn: eui.Button;
	public setting_com: SettingCom;

	public recharge_btn: eui.Button;
	public ownChip_lb: eui.Label;
	public head_img: eui.Image;

	public yuerMask_rt:eui.Rect;

	public chooseChipView:ChooseChipView;
	public cat:egret.MovieClip;
	public yuer:egret.Bitmap;

	private chuganCon:GanController;
	private fishCon:FishController;

	protected childrenCreated(): void {
		super.childrenCreated();

		this.chugan_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChugan, this);
		this.chooseChip_img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChooseChip, this);

		this.recharge_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRecharge, this);

		this.jiangbei_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTask, this);
		this.setting_com.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetting, this);

		this.cat = McManager.inst.getCat('chugan');
		this.cat.x = 345;this.cat.y = 276;
		this.addChild(this.cat);

		this.yuer = new eui.Image(RES.getRes('yuer_png'));
		this.yuer.x = 345; this.yuer.y = 233;
		this.addChild(this.yuer);
		this.yuer.mask = this.yuerMask_rt;

		this.chuganCon = new GanController(this.yuer, this.cat);
		
		
		this.fishCon = new FishController(this);
		this.fishCon.addEventListener(MyEvent.ALL_FISH_SHANG_GOU, this.onShougan, this);
		this.fishCon.initFish();
		
		this.chooseChipView = new ChooseChipView();
		this.chooseChipView.x = this.bottom_gr.x;this.chooseChipView.y = this.bottom_gr.y - 287;
		this.chooseChipView.addEventListener(MyEvent.CHANGE_CHIP, this.onChangeChip, this);
	}

	//出竿
	private onChugan(e: egret.TouchEvent): void {
		this.chuganCon.chugan();
	}
	//鱼上钩
	public shanggou(data:any[]):void{
		this.fishCon.shanggou(data);
	}	
	//收杆
	public onShougan():void{
		this.chuganCon.shougan();
	} 
	private onChooseChip(e: egret.TouchEvent): void {
		ViewManager.inst.add(this.chooseChipView);
	}

	//任务
	private onTask(e: egret.TouchEvent): void {
		PanelManager.inst.open(PanelName.TASK);
	}
	//设置
	private onSetting(e: egret.TouchEvent): void {
		egret.log(e.currentTarget);
	}

	//充值
	private onRecharge(e: egret.TouchEvent): void {
		 PanelManager.inst.open(PanelName.RECHARGE);
	}

	private onChangeChip(e:MyEvent):void{
		this.chooseChip_lb.text = e.data.toString();
	}
}