function getArea(arr)
{
	let ret = -1;
    if (typeof arr != 'undefined')
    {
        if (arr.length == 2)
        {
            let x = arr[0];
            let y = arr[1];

            if (Number.isInteger(x) && Number.isInteger(y))
            {
                if (x >= 0 && y >= 0)
                    ret = x*y;
            }
        }
    }	

	return ret;
}

module.exports = getArea;