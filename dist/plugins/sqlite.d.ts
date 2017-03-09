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
export declare class SQLite {
    private _objectInstance;
    readonly databaseFeatures: any;
    constructor();
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
    openDatabase(config: any): Promise<any>;
    addTransaction(transaction: any): void;
    transaction(fn: any): Promise<any>;
    readTransaction(fn: any): Promise<any>;
    startNextTransaction(): void;
    close(): Promise<any>;
    start(): void;
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
    executeSql(statement: string, params: any): Promise<any>;
    addStatement(sql: any, values: any): Promise<any>;
    sqlBatch(sqlStatements: any): Promise<any>;
    abortallPendingTransactions(): void;
    handleStatementSuccess(handler: any, response: any): void;
    handleStatementFailure(handler: any, response: any): void;
    run(): void;
    abort(txFailure: any): void;
    finish(): void;
    abortFromQ(sqlerror: any): void;
    static echoTest(): Promise<any>;
    static deleteDatabase(first: any): Promise<any>;
}
