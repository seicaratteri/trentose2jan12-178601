const express = require('express'),
    bodyParser = require('body-parser');
const area = express.Router()


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

area.get('/getArea', function (req, res) {
    let c = getArea([req.query.side1,req.query.side2]);
    let ret = {area:c};

    if (c === -1)
        res.status(400).json(ret);
    else
        res.status(200).json(ret);
})

module.exports = area