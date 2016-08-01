class McManager {
	private static instance: McManager;
    public static get inst(): McManager {
		if (!this.instance) {
            this.instance = new McManager();
        }
        return this.instance;
    }

	private catMcFactory: egret.MovieClipDataFactory;
	private fishMcFactoryArr: egret.MovieClipDataFactory[];

	public constructor() {
		var data = RES.getRes("cat_json");
		var txtr = RES.getRes("cat_png");
		this.catMcFactory = new egret.MovieClipDataFactory(data, txtr);

		this.fishMcFactoryArr = [];
		for (var i = 0, len = 6; i < len; i++) {
			data = RES.getRes("fish" + i + "_json");
			txtr = RES.getRes("fish" + i + "_png");
			this.fishMcFactoryArr[i] = new egret.MovieClipDataFactory(data, txtr);
		}
	}

	public getCat(name: string): egret.MovieClip {
		return new egret.MovieClip(this.catMcFactory.generateMovieClipData(name));
	}

	public getFish(type:number): egret.MovieClip {
		return new egret.MovieClip(this.fishMcFactoryArr[type].generateMovieClipData('fish'));
	}
}