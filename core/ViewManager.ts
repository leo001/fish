class ViewManager {
	private static instance: ViewManager;
    public static get inst(): ViewManager {
		if (!this.instance) {
            this.instance = new ViewManager();
        }
        return this.instance;
    }

	public viewCls: any = {};
	public viewObj: any = {};
	public constructor() {
		this.viewCls[ViewName.FISH_SCENE] = FishScene;
		this.viewCls[ViewName.CHOOSE_CHIP] = ChooseChipView;

		this.block = BlockFactory.getBlock();
		
	}

	public getView(name: string): any {
		var inst: any;
		inst = this.viewObj[name];
		if (null == inst) {
			inst = this.createView(name);
			this.viewObj[name] = inst;
		}

		return inst;
	}

	private createView(name: string): any {
		var cls = this.viewCls[name];
		var inst;
		if (cls) {
			inst = new cls();
		} else if (ViewName) {
			egret.log('not found cls name: ' + name);
		}

		return inst;
	}

	//===================================================================================
	private block:egret.Shape;

	public add(view: any): void {
		Lyrs.inst.UI.addChild(this.block);
		Lyrs.inst.UI.addChild(view);
		this.block.addEventListener(egret.TouchEvent.TOUCH_TAP, this.remove, this);
	}

	public remove():void{
		Lyrs.inst.UI.removeChildren();
		this.block.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.remove, this);
	}
}