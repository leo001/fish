class ChuganProxy {
	
	public constructor() {
	}

	public chugan():void{
		var http:HttpSender = new HttpSender();
		var data = {};

		// http.send(data, this.cb_chugan)
		this.cb_chugan({});
	}

	public cb_chugan(data:any):void{
		var s:FishScene = ViewManager.inst.getView(ViewName.FISH_SCENE);
		
		//鱼上钩
		data = [{type:0, num:2}];
		s.shanggou(data);
	}
}