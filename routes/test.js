var express = require('express');
var router = express.Router();

/*pic.html */
router.get('/:tagvalue/pic.html', function(req, res, next) {
 res.render('pich',{tagvalue:'dog'});

});

/*pic.json*/
router.get('/:tagvalue/pic.json',function(req,resp,next){
    const https = require("https");
    const url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cat";
    
    https
    .get(url, res => {
        res
            .setEncoding("utf8");
            let body = "";
      res
            .on("data", data => {
            body += data;
             });
      res
            .on("end", () => {
            var f = new Function( "jsonFlickrFeed", body );
            f( function(json){
            //resp.send(json);
            var title1=json.items[2].title;
            var pic1=json.items[2].media.m;
            var data={
                title:title1,
                pic:pic1
            };
            resp.json(data);
            });
    });
    
    });

});

/*mycallback/pic.jsonp*/
router.get('/:tagvalue/mycallback/pic.jsonp',function(req,resp,next){
    const https = require("https");
    const url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cat";
    
    https
    .get(url, res => {
        res
            .setEncoding("utf8");
            let body = "";
      res
            .on("data", data => {
            body += data;
             });
      res
            .on("end", () => {
             var f = new Function( "jsonFlickrFeed", body );
             f( function(json){
             //resp.send(json);
            var title1=json.items[2].title;
            var pic1=json.items[2].media.m;
            var data={
                title:title1,
                pic:pic1
            };
           // resp.jsonp(data);
           resp.jsonp(req.query.callback+{ user: 'tobi' });
             });
            
    });
    
});
});


function query(){
    const https = require("https");
    const url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cat";
    
    https
    .get(url, res => {
        res
            .setEncoding("utf8");
            let body = "";
      res
            .on("data", data => {
            body += data;
             });
      res
            .on("end", () => {
            var f = new Function( "jsonFlickrFeed", body );
            f( function(json){
            return json;
            });
    });
    
});

}

module.exports = router;

