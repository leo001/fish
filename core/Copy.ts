class Copy {
	public static copy(arr: any[]): any[] {
		var re: any[] = [];
		for (var i = 0, len = arr.length; i < len; i++) {
			re[i] = arr[i];
		}
		return re;
	}
}