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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name SQLite Porter
 * @description
 * This Cordova/Phonegap plugin can be used to import/export to/from a SQLite database using either SQL or JSON.
 *
 * @usage
 * ```typescript
 * import { SQLitePorter } from '@ionic-native/sqlite-porter';
 *
 *
 * constructor(private sqlitePorter: SQLitePorter) { }
 *
 * ...
 *
 * let db = window.openDatabase('Test', '1.0', 'TestDB', 1 * 1024);
 * // or we can use SQLite plugin
 * // we will assume that we injected SQLite into this component as sqlite
 * this.sqlite.create({
 *   name: 'data.db',
 *   location: 'default'
 * })
 *   .then((db: any) => {
 *     let dbInstance = db._objectInstance;
 *     // we can pass db._objectInstance as the database option in all SQLitePorter methods
 *   });
 *
 *
 * let sql = 'CREATE TABLE Artist ([Id] PRIMARY KEY, [Title]);' +
 *            'INSERT INTO Artist(Id,Title) VALUES ("1","Fred");';
 *
 * this.sqlitePorter.importSqlToDb(db, sql)
 *   .then(() => console.log('Imported'))
 *   .catch(e => console.error(e));
 *
 *
 * ```
 */
var SQLitePorter = (function (_super) {
    __extends(SQLitePorter, _super);
    function SQLitePorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Executes a set of SQL statements against the defined database. Can be used to import data defined in the SQL statements into the database, and may additionally include commands to create the table structure.
     * @param db {Object} Database object
     * @param sql {string} SQL statements to execute against the database
     * @return {Promise<any>}
     */
    SQLitePorter.prototype.importSqlToDb = function (db, sql) { return; };
    /**
     * Exports a SQLite DB as a set of SQL statements.
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    SQLitePorter.prototype.exportDbToSql = function (db) { return; };
    /**
     * Converts table structure and/or row data contained within a JSON structure into SQL statements that can be executed against a SQLite database. Can be used to import data into the database and/or create the table structure.
     * @param db {Object} Database object
     * @param json {Object|string} JSON structure containing row data and/or table structure as either a JSON object or string
     * @return {Promise<any>}
     */
    SQLitePorter.prototype.importJsonToDb = function (db, json) { return; };
    /**
     * Exports a SQLite DB as a JSON structure
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    SQLitePorter.prototype.exportDbToJson = function (db) { return; };
    /**
     * Wipes all data from a database by dropping all existing tables
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    SQLitePorter.prototype.wipeDb = function (db) { return; };
    return SQLitePorter;
}(IonicNativePlugin));
SQLitePorter.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SQLitePorter.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'successFn',
        errorName: 'errorFn'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SQLitePorter.prototype, "importSqlToDb", null);
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'successFn',
        errorName: 'errorFn'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SQLitePorter.prototype, "exportDbToSql", null);
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'successFn',
        errorName: 'errorFn'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SQLitePorter.prototype, "importJsonToDb", null);
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'successFn',
        errorName: 'errorFn'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SQLitePorter.prototype, "exportDbToJson", null);
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'successFn',
        errorName: 'errorFn'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SQLitePorter.prototype, "wipeDb", null);
SQLitePorter = __decorate([
    Plugin({
        pluginName: 'SQLitePorter',
        plugin: 'uk.co.workingedge.cordova.plugin.sqliteporter',
        pluginRef: 'cordova.plugins.sqlitePorter',
        repo: 'https://github.com/dpa99c/cordova-sqlite-porter',
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'iOS', 'Tizen', 'Windows', 'Windows Phone']
    })
], SQLitePorter);
export { SQLitePorter };
//# sourceMappingURL=index.js.map