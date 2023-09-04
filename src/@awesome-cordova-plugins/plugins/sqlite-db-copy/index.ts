import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Sqlite Db Copy
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { SqliteDbCopy } from '@awesome-cordova-plugins/sqlite-db-copy/ngx';
 *
 *
 * constructor(private sqliteDbCopy: SqliteDbCopy) { }
 *
 * ...
 *
 *
 * this.sqliteDbCopy.copy('sample.db', 0)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'cordova-plugin-dbcopy',
  plugin: 'cordova-plugin-dbcopy',
  pluginRef: 'window.plugins.sqlDB',
  repo: 'https://github.com/an-rahulpandey/cordova-plugin-dbcopy',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SqliteDbCopy extends AwesomeCordovaNativePlugin {
  /**
   * Copy database from www directory to device SQLite DB location
   * (for ios only, use 0 for Android)
   * location = 0; // (Disable iCloud Backup) If set will copy the database to Library/LocalDatabase. The database will not be synced by the iCloud Backup.
   * or
   * location = 1; // If set will copy the database to Library folder instead of Documents folder.
   * or
   * location = 2; // It will copy the database in the default SQLite Database directory. This is the default location for database
   *
   * @param dbname {string} Database file name available in www diretory with extension.The plugin will look for and copy the file according to the filename provided here. And the same file name should be used while opening the database via SQLitePlugin
   * @param location {number} Location where to copy the database for app (only applicable for ios).For Android pass 0.
   * @returns {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3,
  })
  copy(dbname: string, location: number): Promise<any> {
    return;
  }
  /**
   * Check if database is available at external storage. Useful when trying to copying the database from device sdcard.
   *
   * @param dbname {string} Name of the database file which is available on external or intenral storage
   * @param source {string} Full native path for the folder in which db file is present. The "/" must be added at the end of path. For.eg. /sdcard/mydb/. Should not include dbname.
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3,
  })
  checkDbOnStorage(dbname: string, source: string): Promise<any> {
    return;
  }
  /**
   * Copy database which is available on the device external/internal storage to app default db location
   * (for ios only, use 0 for Android)
   * location = 0; // (Disable iCloud Backup) If set will copy the database to Library/LocalDatabase. The database will not be synced by the iCloud Backup.
   * or
   * location = 1; // If set will copy the database to Library folder instead of Documents folder.
   * or
   * location = 2; // It will copy the database in the default SQLite Database directory. This is the default location for database
   *
   * @param dbname {string} Is the name of the database you want to copy. The plugin will look for and copy the file according to the filename provided here. And the same file name should be used while opening the database via SQLitePlugin
   * @param location {number} Location where to copy the database for app (only applicable for ios). For Android pass 0.
   * @param source {string} Source File location like /sdcard/mydb/db.db. Please provide a valid existing location and the dbname should be present in the path.
   * @param deleteolddb {boolean} A boolean value if set to true, will delete the existing db from the local app database folder before copying the new db. Please provide proper boolean value true or false;
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 4,
    errorIndex: 5,
  })
  copyDbFromStorage(dbname: string, location: number, source: string, deleteolddb: boolean): Promise<any> {
    return;
  }
  /**
   * Copy the app database to external/internal storage on the device.
   * (for ios only, use 0 for Android)
   * location = 0; //It will copy the database from Library/LocalDatabase location.
   * or
   * location = 1; // It will copy the database from Library folder instead.
   * or
   * location = 2; // It will copy the database from the default SQLite Database directory. This is the default location for database
   *
   * @param dbname {string} Is the name of the database you want to copy. The plugin will look for and copy the file according to the filename provided here. And the same file name should be used while opening the database via SQLitePlugin.
   * @param location {number} Location where to copy the database for app (only applicable for ios). For Android pass 0.
   * @param destination {string} Destination File location like /sdcard/mydb/ Please provide a valid existing location and "/" should be present at the end of the path. Do not append db name in the path.
   * @param overwrite {boolean}  If set to true, then will replace the file at the destination. Otherwise will throw an error, if destination file already exists.
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 4,
    errorIndex: 5,
  })
  copyDbToStorage(dbname: string, location: number, destination: string, overwrite: boolean): Promise<any> {
    return;
  }
  /**
   * This method allows you to remove the database from the apps default database storage location.
   * (for ios only, use 0 for Android)
   * location = 0; // (Disable iCloud Backup) If set will copy the database to Library/LocalDatabase. The database will not be synced by the iCloud Backup.
   * or
   * location = 1; // If set will copy the database to Library folder instead of Documents folder.
   * or
   * location = 2; // It will copy the database in the default SQLite Database directory. This is the default location for database
   *
   * @param dbname {string} Is the name of the database you want to remove. If the database file is having any extension, please provide that also.
   * @param location {number} Location where to copy the database for app (only applicable for ios).For Android pass 0.
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3,
  })
  remove(dbname: string, location: number): Promise<any> {
    return;
  }
}
