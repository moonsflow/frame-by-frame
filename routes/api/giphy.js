var express = require('express');
var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({extended: false});
var router = express.Router();

var giphy = require('giphy-api')();


router.route('/giphy')
  .get(function(request, response) {
    response.send(request.params);
    //giphy.search({
    //  q: request.params.query,
    //  rating: 'g',
    //  fmt: 'html'
    //}, function(err, res) {
    //  response.send(res);
    //});
  });


module.exports = router;