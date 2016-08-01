class SettingCom extends eui.Component {
	public constructor() {
		super();
		this.skinName = SettingSkin;
	}

public settting_btn:eui.Button;

public detail_gr:eui.Group;
public sound_img:eui.Image;
public help_img:eui.Image;
public music_btn:eui.ToggleButton;

public mask_rt:eui.Rect;

public nextTweenDir:number;

public DIR_DOWN:number = 0;
public DIR_UP:number = 1;

	protected childrenCreated():void
	{
		super.childrenCreated();

		this.settting_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetting, this);
		
		this.nextTweenDir = this.DIR_DOWN;

		this.detail_gr.y = -253;

		this.detail_gr.mask = this.mask_rt;

	}

	private onSetting(e:egret.TouchEvent):void{
		this.touchChildren = this.touchEnabled = false;
		var desy;
		if(this.DIR_DOWN == this.nextTweenDir){
			desy = 0;
		}else{
			desy = -253;
		}

		egret.Tween.get(this.detail_gr).to({y:desy}, 400, egret.Ease.sineIn).call(()=>{			
			this.touchChildren = this.touchEnabled = true;
			if(this.DIR_DOWN == this.nextTweenDir){
				this.nextTweenDir = this.DIR_UP;
			}else{
				this.nextTweenDir = this.DIR_DOWN;
			}
			
		});
	}
}