import { Cordova, CordovaInstance, Plugin } from './plugin';


declare var sqlitePlugin;

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
@Plugin({
    pluginRef: 'sqlitePlugin',
    plugin: 'cordova-sqlite-storage',
    repo: 'https://github.com/litehelpers/Cordova-sqlite-storage'
})
export class SQLite {

  private _objectInstance: any;
  get databaseFeatures(): any {
    return this._objectInstance.databaseFeatures;
  }

  constructor() { }

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
  openDatabase(config: any): Promise<any> {
    return new Promise((resolve, reject) => {
      sqlitePlugin.openDatabase(config, db => {
        this._objectInstance = db;
        resolve(db);
      }, error => {
        console.warn(error);
        reject(error);
      });
    });
  }

  @CordovaInstance({
    sync: true
  })
  addTransaction(transaction: any): void { }

  @CordovaInstance()
  transaction(fn: any): Promise<any> { return; }

  @CordovaInstance()
  readTransaction(fn: any): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  startNextTransaction(): void { }

  @CordovaInstance()
  close(): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  start(): void { }

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
  @CordovaInstance()
  executeSql(statement: string, params: any): Promise<any> { return; }

  @CordovaInstance()
  addStatement(sql, values): Promise<any> { return; }

  @CordovaInstance()
  sqlBatch(sqlStatements: any): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  abortallPendingTransactions(): void { }

  @CordovaInstance({
    sync: true
  })
  handleStatementSuccess(handler, response): void { }


  @CordovaInstance({
    sync: true
  })
  handleStatementFailure(handler, response): void { }


  @CordovaInstance({
    sync: true
  })
  run(): void { }


  @CordovaInstance({
    sync: true
  })
  abort(txFailure): void { }


  @CordovaInstance({
    sync: true
  })
  finish(): void { }


  @CordovaInstance({
    sync: true
  })
  abortFromQ(sqlerror): void { }


  @Cordova()
  static echoTest(): Promise<any> { return; }

  @Cordova()
  static deleteDatabase(first): Promise<any> { return; }

}
