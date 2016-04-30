import {CordovaInstance, Plugin, Cordova} from './plugin';
declare var sqlitePlugin;
/**
 * @name SQLite
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

    constructor (config: any) {
       new Promise((resolve, reject) => {
           sqlitePlugin.openDatabase(config, resolve, reject);
       }).then(
           db => this._objectInstance = db,
           error => console.warn(error)
       );
    }

    @CordovaInstance({
        sync: true
    })
    addTransaction (transaction: any): void {}

    @CordovaInstance()
    transaction (fn: any): Promise<any> {return; }

    @CordovaInstance()
    readTransaction (fn: any): Promise<any> {return; }

    @CordovaInstance({
        sync: true
    })
    startNextTransaction (): void {}

    @CordovaInstance()
    close (): Promise<any> {return; }

    @CordovaInstance({
        sync: true
    })
    start (): void {}

    @CordovaInstance()
    executeSql (statement: string, params: any): Promise<any> {return; }

    @CordovaInstance()
    addSatement (sql, values): Promise<any> {return; }

    @CordovaInstance()
    sqlBatch (sqlStatements: any): Promise<any> {return; }

    @CordovaInstance({
        sync: true
    })
    abortallPendingTransactions (): void {}

    @CordovaInstance({
        sync: true
    })
    handleStatementSuccess (handler, response): void {}


    @CordovaInstance({
        sync: true
    })
    handleStatementFailure (handler, response): void {}


    @CordovaInstance({
        sync: true
    })
    run (): void {}


    @CordovaInstance({
        sync: true
    })
    abort (txFailure): void {}


    @CordovaInstance({
        sync: true
    })
    finish (): void {}


    @CordovaInstance({
        sync: true
    })
    abortFromQ (sqlerror): void {}


    @Cordova()
    static echoTest (): Promise<any> {return; }

    @Cordova()
    static deleteDatabase (first): Promise<any> {return; }

}