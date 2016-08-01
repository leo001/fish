class Framer extends egret.DisplayObject{
	private static instance:Framer;
    public static get inst():Framer{
         if(!this.instance){
            this.instance = new Framer();
        }
        return this.instance;
    }
	private observers:IFramer[];


	public constructor() {
		super();

		this.observers = [];
		
	}

	public register(observer:IFramer):void{
		this.observers.push(observer);
		if(!this.hasEventListener(egret.Event.ENTER_FRAME)){
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}
	}

	public unRegister(observer:IFramer):void{
		var idx = this.observers.indexOf(observer);
		if(-1 != idx){
			this.observers.splice(idx, 1);
			if(0 == this.observers.length){
				this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
			}
		}else{
			egret.warn('unRegister error: not in obsevers');
		}
	}


	public onEnterFrame():void{
		var observer:IFramer;
		for(var len = this.observers.length, i = len - 1; i >= 0; i--){
			observer = this.observers[i];
			observer.tick();
		}
	}

}