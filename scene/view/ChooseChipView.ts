class ChooseChipView extends eui.Component {
	public constructor() {
		super();
		this.skinName = ChooseChipSkin;
	}

	public chip_li:eui.List;

	private preItem:ChipRender;

	protected childrenCreated():void
	{
		super.childrenCreated();

		this.chip_li.dataProvider = new eui.ArrayCollection([100, 250, 500, 1000, 2500]);		
		this.chip_li.itemRenderer = ChipRender;
		this.chip_li.selectedIndex = 4;
		this.chip_li.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChoose, this);
	}

	private onChoose(e:eui.ItemTapEvent):void{
		// egret.log(e.item, e.itemRenderer);
		var curItem = e.itemRenderer as ChipRender;
		if(this.preItem == curItem){
			return;
		}
		this.preItem = curItem;

		ViewManager.inst.remove();

		this.dispatchEvent(new MyEvent(MyEvent.CHANGE_CHIP, false, false, e.item));
	}
	
}