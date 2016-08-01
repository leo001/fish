class RechargeProxy {
	private static instance: RechargeProxy;
    public static get inst(): RechargeProxy {
        if (!this.instance) {
            this.instance = new RechargeProxy();
        }

        return this.instance;
    }
	public constructor() {
	}

	public pay():void{
		var http:HttpSender = new HttpSender();
		var data = {};

		http.send(data, this.cb_pay)
	}

	public cb_pay(data:any):void{

	}
}