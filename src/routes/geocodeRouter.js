var express = require('express');
var geocodeRouter = express.Router();

var router = function (config) {
    console.log(config.here_api_url);
    var geocodeController = require('../controllers/geocodeController.js')(config);
    geocodeRouter.route('/doGeocode').get(geocodeController.doGeocode);

    return geocodeRouter;
}

module.exports = router;