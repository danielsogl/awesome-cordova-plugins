import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, Plugin, CordovaCheck, InstanceProperty } from '@ionic-native/core';


declare var sqlitePlugin;

export interface SQLiteDatabaseConfig {
  /**
   * Name of the database. Example: 'my.db'
   */
  name: string;
  /**
   * Location of the database. Example: 'default'
   */
  location?: string;
  /**
   * iOS Database Location. Example: 'Library'
   */
  iosDatabaseLocation?: string;
}

/**
 * @hidden
 */
export class SQLiteObject {

  constructor(public _objectInstance: any) { }

  @InstanceProperty databaseFeatures: any;

  @CordovaInstance({
    sync: true
  })
  addTransaction(transaction: any): void { }

  /**
   * @param fn {any}
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    successIndex: 2,
    errorIndex: 1
  })
  transaction(fn: any): Promise<any> { return; }

  /**
   * @param fn {any}
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  readTransaction(fn: any): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  startNextTransaction(): void { }

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  close(): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  start(): void { }

  /**
   * Execute SQL on the opened database. Note, you must call `create` first, and
   * ensure it resolved and successfully opened the database.
   */
  @CordovaInstance()
  executeSql(statement: string, params: any): Promise<any> { return; }

  /**
   * @param sql
   * @param values
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  addStatement(sql, values): Promise<any> { return; }

  /**
   * @param sqlStatements {any}
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  sqlBatch(sqlStatements: any): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  abortallPendingTransactions(): void { }

  /**
   @param handler
   @param response
   */
  @CordovaInstance({
    sync: true
  })
  handleStatementSuccess(handler, response): void { }

  /**
   * @param handler
   * @param response
   */
  @CordovaInstance({
    sync: true
  })
  handleStatementFailure(handler, response): void { }


  @CordovaInstance({
    sync: true
  })
  run(): void { }

  /**
   * @param txFailure
   */
  @CordovaInstance({
    sync: true
  })
  abort(txFailure): void { }


  @CordovaInstance({
    sync: true
  })
  finish(): void { }

  /**
   * @param sqlerror
   */
  @CordovaInstance({
    sync: true
  })
  abortFromQ(sqlerror): void { }

}

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
 */
@Plugin({
  pluginName: 'SQLite',
  pluginRef: 'sqlitePlugin',
  plugin: 'cordova-sqlite-storage',
  repo: 'https://github.com/litehelpers/Cordova-sqlite-storage'
})
@Injectable()
export class SQLite {

  /**
   * Open or create a SQLite database file.
   *
   * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
   *
   * @param config {SQLiteDatabaseConfig} database configuration
   * @return Promise<SQLiteObject>
   */
  @CordovaCheck()
  create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    return new Promise((resolve, reject) => {
        sqlitePlugin.openDatabase(config, db => resolve(new SQLiteObject(db)), reject);
    });
  }

  /**
   * Verify that both the Javascript and native part of this plugin are installed in your application
   * @returns {Promise<any>}
   */
  @Cordova()
  echoTest(): Promise<any> { return; }

  /**
   * Deletes a database
   * @param config {SQLiteDatabaseConfig} database configuration
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteDatabase(config: SQLiteDatabaseConfig): Promise<any> { return; }

}
