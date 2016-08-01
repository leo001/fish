class CenterButton extends eui.Button{
	public constructor() {
		super();
		this.skinName = CenterButtonSkin;
	}

public img:eui.Image;

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.img.anchorOffsetX = this.img.width * .5;
		this.img.anchorOffsetY = this.img.height * .5;
	}
	
}