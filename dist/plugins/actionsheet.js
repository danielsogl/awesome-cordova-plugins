if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var ActionSheet = (function () {
    function ActionSheet() {
    }
    ActionSheet.show = function (options) { };
    ;
    ActionSheet.hide = function (options) { };
    ;
    Object.defineProperty(ActionSheet, "show",
        __decorate([
            plugin_1.Cordova()
        ], ActionSheet, "show", Object.getOwnPropertyDescriptor(ActionSheet, "show")));
    Object.defineProperty(ActionSheet, "hide",
        __decorate([
            plugin_1.Cordova()
        ], ActionSheet, "hide", Object.getOwnPropertyDescriptor(ActionSheet, "hide")));
    ActionSheet = __decorate([
        plugin_1.Plugin({
            name: 'ActionSheet',
            plugin: 'cordova-plugin-actionsheet',
            pluginRef: 'plugins.actionsheet',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet'
        })
    ], ActionSheet);
    return ActionSheet;
})();
exports.ActionSheet = ActionSheet;
//# sourceMappingURL=actionsheet.js.map