var express = require('express');
var router = express.Router();

/*history*/
router.get('/', function(req, res, next) {
 res.send("history");
 
});

module.exports = router;
