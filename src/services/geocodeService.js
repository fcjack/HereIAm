var geocodeService = function (config) {

    var doGeocode = function (lat, lng) {
        return "Geocode By address";
    };

    var doReverseGeocode = function (req, res) {
        return "Geocode By Position";
    };
    
    return {
        doGeocode: doGeocode
    }
}

module.exports = geocodeService;