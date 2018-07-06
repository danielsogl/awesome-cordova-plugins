var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, Plugin, CordovaCheck, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
/**
 * @hidden
 */
var SQLiteObject = (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { };
    /**
     * @param fn {any}
     * @returns {Promise<any>}
     */
    SQLiteObject.prototype.transaction = function (fn) { return; };
    /**
     * @param fn {Function}
     * @returns {Promise<any>}
     */
    SQLiteObject.prototype.readTransaction = function (fn) { return; };
    SQLiteObject.prototype.startNextTransaction = function () { };
    /**
     * @returns {Promise<any>}
     */
    SQLiteObject.prototype.open = function () { return; };
    /**
     * @returns {Promise<any>}
     */
    SQLiteObject.prototype.close = function () { return; };
    /**
     * Execute SQL on the opened database. Note, you must call `create` first, and
     * ensure it resolved and successfully opened the database.
     */
    SQLiteObject.prototype.executeSql = function (statement, params) { return; };
    /**
     * @param sqlStatements {Array<string | string[]>}
     * @returns {Promise<any>}
     */
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return; };
    SQLiteObject.prototype.abortallPendingTransactions = function () { };
    return SQLiteObject;
}());
export { SQLiteObject };
__decorate([
    InstanceProperty,
    __metadata("design:type", Object)
], SQLiteObject.prototype, "databaseFeatures", void 0);
__decorate([
    InstanceProperty,
    __metadata("design:type", Object)
], SQLiteObject.prototype, "openDBs", void 0);
__decorate([
    CordovaInstance({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], SQLiteObject.prototype, "addTransaction", null);
__decorate([
    CordovaInstance({
        successIndex: 2,
        errorIndex: 1
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SQLiteObject.prototype, "transaction", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", Promise)
], SQLiteObject.prototype, "readTransaction", null);
__decorate([
    CordovaInstance({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SQLiteObject.prototype, "startNextTransaction", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SQLiteObject.prototype, "open", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SQLiteObject.prototype, "close", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SQLiteObject.prototype, "executeSql", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SQLiteObject.prototype, "sqlBatch", null);
__decorate([
    CordovaInstance({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SQLiteObject.prototype, "abortallPendingTransactions", null);
/**
 * @name SQLite
 *
 * @description
 * Access SQLite databases on the device.
 *
 * @usage
 *
 * ```typescript
 * import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
 *
 * constructor(private sqlite: SQLite) { }
 *
 * ...
 *
 * this.sqlite.create({
 *   name: 'data.db',
 *   location: 'default'
 * })
 *   .then((db: SQLiteObject) => {
 *
 *
 *     db.executeSql('create table danceMoves(name VARCHAR(32))', {})
 *       .then(() => console.log('Executed SQL'))
 *       .catch(e => console.log(e));
 *
 *
 *   })
 *   .catch(e => console.log(e));
 *
 * ```
 *
 * @classes
 * SQLiteObject
 * @interfaces
 * SQLiteDatabaseConfig
 * SQLiteTransaction
 */
var SQLite = (function (_super) {
    __extends(SQLite, _super);
    function SQLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open or create a SQLite database file.
     *
     * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     *
     * @param config {SQLiteDatabaseConfig} database configuration
     * @return Promise<SQLiteObject>
     */
    SQLite.prototype.create = function (config) {
        return new Promise(function (resolve, reject) {
            sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
        });
    };
    /**
     * Verify that both the Javascript and native part of this plugin are installed in your application
     * @returns {Promise<any>}
     */
    SQLite.prototype.echoTest = function () { return; };
    /**
     * Deletes a database
     * @param config {SQLiteDatabaseConfig} database configuration
     * @returns {Promise<any>}
     */
    SQLite.prototype.deleteDatabase = function (config) { return; };
    return SQLite;
}(IonicNativePlugin));
SQLite.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SQLite.ctorParameters = function () { return []; };
__decorate([
    CordovaCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SQLite.prototype, "create", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SQLite.prototype, "echoTest", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SQLite.prototype, "deleteDatabase", null);
SQLite = __decorate([
    Plugin({
        pluginName: 'SQLite',
        pluginRef: 'sqlitePlugin',
        plugin: 'cordova-sqlite-storage',
        repo: 'https://github.com/litehelpers/Cordova-sqlite-storage',
        platforms: ['Android', 'iOS', 'macOS', 'Windows']
    })
], SQLite);
export { SQLite };
//# sourceMappingURL=index.js.map