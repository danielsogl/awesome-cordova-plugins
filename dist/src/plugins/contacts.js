"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Array, Object]), 
        __metadata('design:returntype', void 0)
    ], Contacts, "create", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Array, Object]), 
        __metadata('design:returntype', void 0)
    ], Contacts, "find", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Contacts, "pickContact", null);
    Contacts = __decorate([
        plugin_1.Plugin({
            name: 'Contacts',
            plugin: 'cordova-plugin-contacts',
            pluginRef: 'navigator.contacts',
            repo: 'https://github.com/apache/cordova-plugin-contacts'
        }), 
        __metadata('design:paramtypes', [])
    ], Contacts);
    return Contacts;
}());
exports.Contacts = Contacts;
//# sourceMappingURL=contacts.js.map