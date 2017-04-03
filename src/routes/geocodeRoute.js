var express = require('express');
var geocodeRouter = express.Router();

var router = function () {
    var geocodeController = require('../controllers/geocodeController.js')();
    geocodeRouter.route('/doGeocode').get(geocodeController.doGeoode());

    return geocodeRouter;
}

module.exports = router;