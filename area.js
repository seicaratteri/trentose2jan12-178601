function getArea(arr)
{
	let ret = -1;
	if (arr.length == 2)
	{
		let x = arr[0];
		let y = arr[1];

		if (!isNaN(x) && !isNaN(y))
		{
			if (x >= 0 && y >= 0)
				ret = x*y;
		}
	}

	return ret;
}

console.log(getArea([2]));