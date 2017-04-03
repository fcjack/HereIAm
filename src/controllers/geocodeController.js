var geocodeController = function (config) {

    var geocodeService = require('../services/geocodeService.js')(config);
    var doGeocode = function (req, res) {
        console.log(req.query);
        console.log(geocodeService.doGeocode);
        return res.send(geocodeService.doGeocode(req.query.lat, req.query.lng));
    };

    var doReverseGeocode = function (req, res) {
        return res.send(geocodeService.doReverseGeocode(config, req.query.address));
    };

    return {
        doGeocode: doGeocode,
        doReverseGeocode: doReverseGeocode
    }
};

module.exports = geocodeController;