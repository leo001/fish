class MyEvent extends egret.Event{
	public data:any;	
	public constructor(type: string, bubbles?: boolean, cancelable?: boolean, data?: any){
		super(type, bubbles, cancelable, data);
		
	}
	public static ALL_FISH_SHANG_GOU: string = 'ALL_FISH_SHANG_GOU';

	public static CHANGE_CHIP: string = 'CHANGE_CHIP';
	
}