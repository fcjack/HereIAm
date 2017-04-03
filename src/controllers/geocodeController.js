var geocodeService = require('../services/geocodeService.js');


var geocodeController = function(config) {
    
    var doGeocode = function(lat, lng) {
        return geocodeService.doGeocode(config, lat, lng);
    }
    
    var doReverseGeocode = function(address) {
        return geocodeService.doReverseGeocode(config, address);
    }
}

modules.export = geocodeController;