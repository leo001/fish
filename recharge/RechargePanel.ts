class RechargePanel extends BasePanel{
	public constructor() {
		super();
		this.skinName = RechargeSkin;
	}

	public recharge_sc:eui.Scroller;
	public recharge_li:eui.List;

	protected childrenCreated():void
	{
		super.childrenCreated();

		this.recharge_sc.scrollPolicyH = eui.ScrollPolicy.OFF;
		this.recharge_sc.verticalScrollBar.autoVisibility = false;
		this.recharge_sc.verticalScrollBar.visible = false;
		// egret.log(this.recharge_sc.bounces);
		// this.recharge_sc.bounces = false;

		this.recharge_li.dataProvider = new eui.ArrayCollection(['1星币','12星币','123星币','1234星币','12345星币','123456星币']);
		this.recharge_li.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onGet, this);
	}
	
	public onGet(e:eui.ItemTapEvent):void{
		var idx = e.itemIndex;
		egret.log(idx);
		RechargeProxy.inst.pay();
	}
}