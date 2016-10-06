"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name SQLite
 *
 * @description
 * Access SQLite databases on the device.
 *
 * @usage
 *
 * ```typescript
 * import { SQLite } from 'ionic-native';
 *
 * let db = new SQLite();
 * db.openDatabase({
 *   name: 'data.db',
 *   location: 'default' // the location field is required
 * }).then(() => {
 *   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
 *
 *   }, (err) => {
 *     console.error('Unable to execute sql: ', err);
 *   });
 * }, (err) => {
 *   console.error('Unable to open database: ', err);
 * });
 * ```
 *
 */
var SQLite = (function () {
    function SQLite() {
    }
    Object.defineProperty(SQLite.prototype, "databaseFeatures", {
        get: function () {
            return this._objectInstance.databaseFeatures;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Open or create a SQLite database file.
     *
     * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     *
     * @param config the config for opening the database.
     * @usage
     *
     * ```typescript
     * import { SQLite } from 'ionic-native';
     *
     * let db = new SQLite();
     * db.openDatabase({
     *   name: 'data.db',
     *   location: 'default' // the location field is required
     * }).then(() => {
     *   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
     *
     *   }, (err) => {
     *     console.error('Unable to execute sql', err);
     *   })
     * }, (err) => {
     *   console.error('Unable to open database', err);
     * });
     * ```
     */
    SQLite.prototype.openDatabase = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            sqlitePlugin.openDatabase(config, function (db) {
                _this._objectInstance = db;
                resolve(db);
            }, function (error) {
                console.warn(error);
                reject(error);
            });
        });
    };
    SQLite.prototype.addTransaction = function (transaction) { };
    SQLite.prototype.transaction = function (fn) { return; };
    SQLite.prototype.readTransaction = function (fn) { return; };
    SQLite.prototype.startNextTransaction = function () { };
    SQLite.prototype.close = function () { return; };
    SQLite.prototype.start = function () { };
    /**
     * Execute SQL on the opened database. Note, you must call `openDatabase` first, and
     * ensure it resolved and successfully opened the database.
     *
     * @usage
     *
     * ```typescript
     * db.executeSql('SELECT FROM puppies WHERE type = ?', ['cavalier']).then((resultSet) => {
     *   // Access the items through resultSet.rows
     *   // resultSet.rows.item(i)
     * }, (err) => {})
     * ```
     */
    SQLite.prototype.executeSql = function (statement, params) { return; };
    SQLite.prototype.addStatement = function (sql, values) { return; };
    SQLite.prototype.sqlBatch = function (sqlStatements) { return; };
    SQLite.prototype.abortallPendingTransactions = function () { };
    SQLite.prototype.handleStatementSuccess = function (handler, response) { };
    SQLite.prototype.handleStatementFailure = function (handler, response) { };
    SQLite.prototype.run = function () { };
    SQLite.prototype.abort = function (txFailure) { };
    SQLite.prototype.finish = function () { };
    SQLite.prototype.abortFromQ = function (sqlerror) { };
    SQLite.echoTest = function () { return; };
    SQLite.deleteDatabase = function (first) { return; };
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "addTransaction", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "transaction", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "readTransaction", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "startNextTransaction", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "close", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "start", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "executeSql", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "addStatement", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "sqlBatch", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abortallPendingTransactions", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "handleStatementSuccess", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "handleStatementFailure", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "run", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abort", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "finish", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abortFromQ", null);
    __decorate([
        plugin_1.Cordova()
    ], SQLite, "echoTest", null);
    __decorate([
        plugin_1.Cordova()
    ], SQLite, "deleteDatabase", null);
    SQLite = __decorate([
        plugin_1.Plugin({
            pluginRef: 'sqlitePlugin',
            plugin: 'cordova-sqlite-storage',
            repo: 'https://github.com/litehelpers/Cordova-sqlite-storage'
        })
    ], SQLite);
    return SQLite;
}());
exports.SQLite = SQLite;
//# sourceMappingURL=sqlite.js.map