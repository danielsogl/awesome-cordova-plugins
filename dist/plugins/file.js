if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var File = (function () {
    function File() {
    }
    File = __decorate([
        plugin_1.Plugin({
            name: 'File',
            plugin: 'cordova-plugin-file',
            pluginRef: 'cordova.file'
        })
    ], File);
    return File;
})();
exports.File = File;
//# sourceMappingURL=file.js.map