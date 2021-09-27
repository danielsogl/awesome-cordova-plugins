import { Injectable } from '@angular/core';
import {
  Cordova,
  CordovaCheck,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
  Plugin,
} from '@awesome-cordova-plugins/core';

declare const sqlitePlugin: any;

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
  /**
   * support arbitrary database location on android with https://github.com/litehelpers/cordova-sqlite-evcore-extbuild-free
   */
  androidDatabaseLocation?: string;
  /**
   * support opening pre-filled databases with https://github.com/litehelpers/cordova-sqlite-ext
   */
  createFromLocation?: number;
  /**
   * support encrypted databases with https://github.com/litehelpers/Cordova-sqlcipher-adapter
   */
  key?: string;
}

/**
 * @hidden
 */
export interface DbTransaction {
  executeSql: (sql: any, values?: any[], success?: Function, error?: Function) => void;
}

/**
 * @hidden
 */
export interface SQLiteTransaction extends DbTransaction {
  start: () => void;
  addStatement: DbTransaction['executeSql'];
  handleStatementSuccess: (handler: Function, response: any) => void;
  handleStatementFailure: (handler: Function, response: any) => void;
  run: () => void;
  abort: (txFailure: any) => void;
  finish: () => void;
  abortFromQ: (sqlerror: any) => void;
}

/**
 * @hidden
 */
export class SQLiteObject {
  constructor(public _objectInstance: any) {}

  @InstanceProperty() databaseFeatures: { isSQLitePluginDatabase: boolean };
  @InstanceProperty() openDBs: any;

  @CordovaInstance({
    sync: true,
  })
  addTransaction(transaction: (tx: SQLiteTransaction) => void): void {}

  /**
   * @param fn {Function}
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    successIndex: 2,
    errorIndex: 1,
  })
  transaction(fn: (tx: DbTransaction) => void): Promise<any> {
    return;
  }

  /**
   * @param fn {Function}
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  readTransaction(fn: (tx: SQLiteTransaction) => void): Promise<any> {
    return;
  }

  @CordovaInstance({
    sync: true,
  })
  startNextTransaction(): void {}

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  open(): Promise<any> {
    return;
  }

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  close(): Promise<any> {
    return;
  }

  /**
   * Execute SQL on the opened database. Note, you must call `create` first, and
   * ensure it resolved and successfully opened the database.
   *
   * @param statement
   * @param params
   */
  @CordovaInstance()
  executeSql(statement: string, params?: any[]): Promise<any> {
    return;
  }

  /**
   * @param sqlStatements {string[] | string[][] | any[]}
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  sqlBatch(sqlStatements: (string | string[] | any)[]): Promise<any> {
    return;
  }

  @CordovaInstance({
    sync: true,
  })
  abortallPendingTransactions(): void {}
}

/**
 * @name SQLite
 * @description
 * Access SQLite databases on the device.
 * @usage
 *
 * ```typescript
 * import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
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
 *     db.executeSql('create table danceMoves(name VARCHAR(32))', [])
 *       .then(() => console.log('Executed SQL'))
 *       .catch(e => console.log(e));
 *
 *
 *   })
 *   .catch(e => console.log(e));
 *
 * ```
 * @classes
 * SQLiteObject
 * @interfaces
 * SQLiteDatabaseConfig
 * SQLiteTransaction
 */
@Plugin({
  pluginName: 'SQLite',
  pluginRef: 'sqlitePlugin',
  plugin: 'cordova-sqlite-storage',
  repo: 'https://github.com/litehelpers/Cordova-sqlite-storage',
  platforms: ['Android', 'iOS', 'macOS', 'Windows'],
})
@Injectable()
export class SQLite extends AwesomeCordovaNativePlugin {
  /**
   * Open or create a SQLite database file.
   *
   * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
   *
   * @param config {SQLiteDatabaseConfig} database configuration
   * @returns Promise<SQLiteObject>
   */
  @CordovaCheck()
  create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    return new Promise((resolve, reject) => {
      sqlitePlugin.openDatabase(config, (db: any) => resolve(new SQLiteObject(db)), reject);
    });
  }

  /**
   * Verify that both the Javascript and native part of this plugin are installed in your application
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  echoTest(): Promise<any> {
    return;
  }

  /**
   * Automatically verify basic database access operations including opening a database
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  selfTest(): Promise<any> {
    return;
  }

  /**
   * Deletes a database
   *
   * @param config {SQLiteDatabaseConfig} database configuration
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteDatabase(config: SQLiteDatabaseConfig): Promise<any> {
    return;
  }
}
