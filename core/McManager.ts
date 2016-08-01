class McManager {
	private static instance: McManager;
    public static get inst(): McManager {
		if (!this.instance) {
            this.instance = new McManager();
        }
        return this.instance;
    }

	private catMcFactory: egret.MovieClipDataFactory;
	private fishMcFactory: egret.MovieClipDataFactory;

	public constructor() {
		var data = RES.getRes("cat_json");
		var txtr = RES.getRes("cat_png");
		this.catMcFactory = new egret.MovieClipDataFactory(data, txtr);

		data = RES.getRes("fish_json");
		txtr = RES.getRes("fish_png");
		this.fishMcFactory = new egret.MovieClipDataFactory(data, txtr);
	}

	public getCat(name: string): egret.MovieClip {
		return new egret.MovieClip(this.catMcFactory.generateMovieClipData(name));
	}
	
	public getFish(name:string):egret.MovieClip{
		return new egret.MovieClip(this.fishMcFactory.generateMovieClipData(name));
	}
}