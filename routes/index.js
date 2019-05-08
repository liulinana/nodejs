var express = require('express');
var router = express.Router();
const fs= require("fs");
var async = require('async');

    /* GET home page. */
router.get('/api', function(req, res, next) {

    async.auto(
        getDataJson((dataJson)=>{
            // res.render('index',{ title: dataJson } );
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end(JSON.stringify(dataJson));
        })
    );

});

router.get('/show', async (req, res, next) => {
    try {
        console.log(req.query.id,"ddd");
        let result = req.query.id
            ? await require('../config/service').select("id",req.query.id)
            : await require('../config/service').show();
        let mno ={
            record: result
        };
        res.send(JSON.stringify(mno));
    } catch (e) {
        res.send(e);
    }
});

//访问data.json 拿到数据解析并返回
const getDataJson=(callBack)=>{
    fs.readFile(__dirname + "/" + "data.json", (err, data)=>{
        if(!err){
            let jsonData= JSON.parse(data);
            callBack(jsonData);
        }else{
            throw err;
        }
    })
};

router.post('/api', function(req, res, next) {
    // res.send('respond with a resource');
    console.log(req.body);
    getDataJson((dataJson)=>{
        // res.render('index',{ title: dataJson } );
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(JSON.stringify(dataJson));
    })
});

module.exports = router;
