import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name SQLite Porter
 * @description
 * This Cordova/Phonegap plugin can be used to import/export to/from a SQLite database using either SQL or JSON.
 *
 * @usage
 * ```
 * import { SQLitePorter } from '@ionic-native/sqlite-porter';
 *
 *
 * constructor(private sqlitePorter: SQLitePorter) { }
 *
 * ...
 *
 * let db = window.openDatabase("Test", "1.0", "TestDB", 1 * 1024);
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
 * let sql = "CREATE TABLE Artist ([Id] PRIMARY KEY, [Title]);" +
 *            "INSERT INTO Artist(Id,Title) VALUES ('1','Fred');";
 *
 * this.sqlitePorter.importSqlToDb(db, sql)
 *   .then(() => console.log('Imported'))
 *   .catch(e => console.error(e));
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'SQLitePorter',
  plugin: 'uk.co.workingedge.cordova.plugin.sqliteporter',
  pluginRef: 'cordova.plugins.sqlitePorter',
  repo: 'https://github.com/dpa99c/cordova-sqlite-porter',
  platforms: ['Android', 'iOS', 'Tizen', 'BlackBerry 10']
})
@Injectable()
export class SQLitePorter {

  /**
   * Executes a set of SQL statements against the defined database. Can be used to import data defined in the SQL statements into the database, and may additionally include commands to create the table structure.
   * @param db {Object} Database object
   * @param sql {string} SQL statements to execute against the database
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'successFn',
    errorName: 'errorFn'
  })
  importSqlToDb(db: any, sql: string): Promise<any> { return; }

  /**
   * Exports a SQLite DB as a set of SQL statements.
   * @param db {Object} Database object
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'successFn',
    errorName: 'errorFn'
  })
  exportDbToSql(db: any): Promise<any> { return; }

  /**
   * Converts table structure and/or row data contained within a JSON structure into SQL statements that can be executed against a SQLite database. Can be used to import data into the database and/or create the table structure.
   * @param db {Object} Database object
   * @param json {Object|string} JSON structure containing row data and/or table structure as either a JSON object or string
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'successFn',
    errorName: 'errorFn'
  })
  importJsonToDb(db: any, json: any): Promise<any> { return; }

  /**
   * Exports a SQLite DB as a JSON structure
   * @param db {Object} Database object
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'successFn',
    errorName: 'errorFn'
  })
  exportDbToJson(db: any): Promise<any> { return; }

  /**
   * Wipes all data from a database by dropping all existing tables
   * @param db {Object} Database object
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'successFn',
    errorName: 'errorFn'
  })
  wipeDb(db: any): Promise<any> { return; }

}
