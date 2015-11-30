if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var Contacts = (function () {
    function Contacts() {
    }
    Contacts.create = function (fields, options) { };
    ;
    Contacts.find = function (fields, options) { };
    ;
    Contacts.pickContact = function () { };
    ;
    Object.defineProperty(Contacts, "create",
        __decorate([
            plugin_1.Cordova({
                successIndex: 1,
                errorIndex: 2
            })
        ], Contacts, "create", Object.getOwnPropertyDescriptor(Contacts, "create")));
    Object.defineProperty(Contacts, "find",
        __decorate([
            plugin_1.Cordova({
                successIndex: 1,
                errorIndex: 2
            })
        ], Contacts, "find", Object.getOwnPropertyDescriptor(Contacts, "find")));
    Object.defineProperty(Contacts, "pickContact",
        __decorate([
            plugin_1.Cordova()
        ], Contacts, "pickContact", Object.getOwnPropertyDescriptor(Contacts, "pickContact")));
    Contacts = __decorate([
        plugin_1.Plugin({
            name: 'Contacts',
            plugin: 'cordova-plugin-contacts',
            pluginRef: 'navigator.contacts',
            repo: 'https://github.com/apache/cordova-plugin-contacts'
        })
    ], Contacts);
    return Contacts;
})();
exports.Contacts = Contacts;
//# sourceMappingURL=contacts.js.map