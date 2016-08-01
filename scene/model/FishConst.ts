class FishConst {
	//4条小彩鱼
	//3条小丑鱼
	//2条蝴蝶鱼
	//1条海南红鱼
	//1条鮟鱇鱼
	//1条大鲨鱼
	public static TYPE_0: number = 0;
	public static TYPE_1: number = 1;
	public static TYPE_2: number = 2;
	public static TYPE_3: number = 3;
	public static TYPE_4: number = 4;
	public static TYPE_5: number = 5;

	public static BIAN_SU: number = 0;
	public static YUN_SU: number = 1;

	public static info: any = [
		{ anchorX: 61, scale: .4, num: 4, swim: 0 },
		{ anchorX: 83, scale: .4, num: 3, swim: 0 },
		{ anchorX: 58, scale: .8, num: 2, swim: 0 },
		{ anchorX: 63, scale: .7, num: 1, swim: 0 },
		{ anchorX: 69, scale: .7, num: 1, swim: 0 },
		{ anchorX: 64, scale: 1.2, num: 1, swim: 1 }
	];

	public static getNum(type: number): number {
		return this.info[type].num;
	}
}