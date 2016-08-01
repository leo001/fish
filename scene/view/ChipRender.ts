class ChipRender extends eui.ItemRenderer {
	public constructor() {
		super();
		this.skinName = ChipRenderSkin;
	}

	public select_img:eui.Image;
	public chip_lb:eui.BitmapLabel;

	public dataChanged():void{
		this.chip_lb.text = this.data.toString();
	}

	protected childrenCreated():void{
		super.childrenCreated();
	}
	
}