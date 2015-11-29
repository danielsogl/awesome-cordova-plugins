var PluginDecotor = (function () {
    function PluginDecotor(cls, config) {
        this.cls = cls;
        this.config = config;
    }
    return PluginDecotor;
})();
function Plugin(config) {
    return function (cls) {
        for (var _i = 0; _i < config.length; _i++) {
            var k = config[_i];
            cls[k] = config[k];
        }
        console.log('Decorated', cls, config);
        return cls;
    };
}
exports.Plugin = Plugin;
