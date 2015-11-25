var util_1 = require('../util');
var PLUGIN_REF = 'navigator.camera';
var Camera = (function () {
    function Camera() {
    }
    Camera.getPicture = util_1.promisify(PLUGIN_REF, 'getPicture', 0, 1);
    return Camera;
})();
exports.Camera = Camera;
