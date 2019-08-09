/**
 * @name Unvired Cordova S D K
 * @description
 * This plugin can be used to connect to UMP ( Unvired Mobile Platform ). This plugin has a dependency on the following Cocoapod. In your iOS project, first install the dependent pod and then install the plugin.
 * ```
 * pod 'UnviredCordovaSDK'
 * ```
 * @usage
 * ```typescript
 * import { UnviredCordovaSDK } from '@ionic-native/unvired-cordova-sdk/ngx';
 *
 *
 * constructor(private unviredCordovaSDK: UnviredCordovaSDK) { }
 *
 * ...
 * // Login
 * let loginParameters = new LoginParameters()
 * loginParameters.appName = 'UNVIRED_DIGITAL_FORMS'
 * loginParameters.metadataPath = '../assets/metadata.json'
 * loginParameters.loginType = LoginType.unvired
 * let loginResult: LoginResult = await this.unviredCordovaSDK.login(loginParameters)
 *
 * // Make a Sync call.
 * let result = await this.unviredCordovaSDK.syncForeground(RequestType.QUERY, null, inputObj, 'UNVIRED_DIGITAL_FORMS_PA_MOBILE_GET_USERS', true)
 * // Make Async call.
 * let result = await this.unviredCordovaSDK.syncBackground(RequestType.QUERY, null, inputObj, 'UNVIRED_DIGITAL_FORMS_PA_MOBILE_GET_USERS', 'INPUT_GET_USERS', 'GUID', false)
 *  // Write Logs
 *  this.unviredCordovaSDK.logInfo("AppComponent", "Initialize", " Some String")
 * ```
 */

import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export enum AuthenticateAndActivateResultType {
  /**
   * This value indicates that UMP was able to validate users credentials & activation of the user is complete.
   * In mobile apps, this also means database is created & apps can proceed with their custom logic.
   */
  auth_activation_success = 2,
  /**
   * This value indicates that UMP was unable to validate users credentials.
   */
  auth_activation_error = 3
}

export enum AuthenticateLocalResultType {
  /**
   * This value indicates that UnviredCordovaSDK was able to validate users credentials and apps can proceed with their custom logic.
   */
  login_success = 4,
  /**
   * This value indicates that UnviredCordovaSDK was unable to validate users credentials. You can retrieve the error information from AuthenticateLocalResult.
   */
  login_error = 5
}

export enum LoginListenerType {
  /**
   * This value indicates that there is no user account exists and user needs to authenticate & activate. Call authenticateAndActivate() api to activate the user.
   */
  auth_activation_required = 0,
  /**
   * Applicable for mobile.
   * This value indicates user needs to login before using the app. This depends on the setting LOCAL_PASSWORD which is set in UMP Admin Cockpit.
   * If LOCAL_PASSWORD is set to true, this type is set everytime user opens the app.
   */
  app_requires_login = 1,
  /**
   * This value indicates app can proceed with its custom logic.
   */
  login_success = 4,
  /**
   * TODO
   */
  app_requires_current_account = 6
}

export enum LoginType {
  /**
   * This value represents authentication using Unvired ID.
   * Example:
   * If you plan to authenticate using Unvired ID, you need to send the following parameters:
   * ```
   * loginParameters.username = 'USER_NAME'
   * loginParameters.password = 'password'
   * loginParameters.company = 'unvired'
   * loginParameters.loginType = LoginType.unvired
   * ```
   */
  unvired = 'UNVIRED_ID',
  /**
   * This value represents authentication using Active Directory Service (ADS).
   * Example:
   * If you plan to authenticate using Unvired ID, you need to send the following parameters:
   * ```
   * loginParameters.username = 'USER_NAME'
   * loginParameters.password = 'password'
   * loginParameters.company = 'unvired'
   * loginParameters.domain = 'ADS_DOMAIN'
   * loginParameters.loginType = LoginType.ads
   * ```
   */
  ads = 'ADS',
  /**
   * This value represents authentication using SAP ID.
   * Example:
   * If you plan to authenticate using Unvired ID, you need to send the following parameters:
   * ```
   * loginParameters.username = 'USER_NAME'
   * loginParameters.password = 'password'
   * loginParameters.company = 'unvired'
   * loginParameters.port = 'SAP_PORT_NAME'
   * loginParameters.domain = 'SAP_DOMAIN'
   * loginParameters.loginType = LoginType.sap
   * ```
   */
  sap = 'SAP',
  /**
   * EMAIL
   * Set the type to email to login based on email id.
   */
  email = 'EMAIL',
  /**
   * TODO:
   */
  custom = 'CUSTOM'
}

export enum ResultType {
  /**
   * This value indicates a succesful operation.
   */
  success = 0,
  /**
   * This value indicates an error.
   */
  error
}

export enum RequestType {
  /**
   * Set this type if the data exchange with UMP is 1:1. The header datastructure needs to be sent which also should be present in database prior to the call.
   * You can use UnviredCordovaSDK's db methods to insert data into database.
   */
  RQST = 0,
  /**
   * Set this type if the data exchange with UMP is 1:N pr 0:N. Sending a datastructure is optional and is dependent on the process agent function.
   * If the process agent function is marked with metadata delete flag, then server data replaces the data in database.
   * If the process agent function is NOT marked with metadata delete flag, then this request type behaves the same as QUERY
   */
  PULL,
  /**
   * This request type is for those message which are initiated by the server. You typically do not set this request type in sync.. methods.
   */
  PUSH,
  /**
   * Set this type if the data exchange with UMP is 1:N pr 0:N. Sending a datastructure is optional and is dependent on the process agent function.
   * Unlike PULL, this request type updates the data in database without deleting existing entries.
   */
  QUERY,
  /**
   * Set this type if the data exchange with UMP is 1:0. This handles the case where no server response is expected.
   */
  REQ
}

export enum NotificationListenerType {
  /**
   * Notify successful asynchronous send of data to the server. This type indicates that data has moved from outbox to sent items.
   */
  dataSend = 0,
  /**
   * Notify data changes for each BusinessEntity when received data from server. This type indicates when data is removed from sent items table.
   */
  dataChanged = 1,
  /**
   * Notify data receive completion on receiving of all BusinessEntities from server. Data would get processed after this step.
   */
  dataReceived = 2,
  /**
   * Notify application data reset.
   */
  appReset = 3,
  /**
   * Notify application with error message and attchment item on attachment download success
   */
  attachmentDownloadSuccess = 4,
  /**
   * Notify application with error message and attchment item on attachment download error
   */
  attachmentDownloadError = 5,
  /**
   * Notify application when incoming data handling finished
   */
  incomingDataProcessingFinished = 6,
  /**
   * Notify application when incoming data handling finished
   */
  attachmentDownloadWaiting = 7,
  /**
   * Notify application with any InfoMessages
   */
  infoMessage = 8,
  /**
   * Notify application with Server errors
   */
  serverError = 9,
  /**
   * Notify attachment downloads completed
   */
  attachmentDownloadCompleted = 10
}

export enum AttachmentItemStatus {
  DEFAULT = 0,
  QUEUED_FOR_DOWNLOAD,
  DOWNLOADED,
  ERROR_IN_DOWNLOAD,
  SAVED_FOR_UPLOAD,
  UPLOADED,
  ERROR_IN_UPLOAD,
  MARKED_FOR_DELETE,
  EXTERNAL
}

export class Settings {
  loginType: LoginType;
  ADS_DOMAIN: string;
  SAP_PORT_NAME: string;
  EMAIL: string;
  ADS_USER_ID: string;
  SAP_USER_ID: string;
  FULL_NAME: string;
  URL: string;
  USER_ID: string;
}

export class UnviredResult {
  /**
   * The data returned in response to the api call.
   */
  data: any;
  /**
   * The informational message returned in lieu of data.
   */
  message: string;
  /**
   * Refer to the overrided property in subclasses.
   */
  type: number;
  /**
   * Contains the error information which the apps can convey to the users.
   */
  error: string;
  /**
   * Contains the detailed error information which the apps can convey to the users.
   */
  errorDetail: string;
}

export class NotifResult extends UnviredResult {
  type: NotificationListenerType;
}

export class SettingsResult extends UnviredResult {
  data: Settings;
  type: ResultType;
}

export class SyncResult extends UnviredResult {
  type: ResultType;
}

export class DbResult extends UnviredResult {
  type: ResultType;
}

export class LoginParameters {
  /**
   * Set the application name as configured in UMP.
   */
  appName: string;

  /**
   * Company name as configured in UMP.
   */
  company: string;

  /**
   * Username of the user trying to login.
   */
  username: string;

  /**
   * Password of the user trying to login.
   */
  password: string;

  /**
   * UMP URL. For example: http://192.168.98.160:8080/UMP
   */
  url: string;

  /**
   * Domain name. Required only if the login type is ADS or SAP.
   */
  domain: string;

  /**
   * Set this value to one of the allowed login types for your app as configured in UMP.
   */
  loginType: LoginType;

  /**
   * FrontEndUserId: This id uniquely identifies the user across devices of same type. If the Unvired user has multiple front end ids for a device type, you need to set this value.
   * If the Unvired user has only one front end id, leave this field blank.
   */
  feUserId: string;

  /**
   * Required only if the loginType is 'sap'. This sets the SAP Port Name.
   */
  port: string;

  /**
   * Required for Browser Platform.
   * For iOS Platform include the metadata.xml file as part of App Bundle
   * For Android Platform include the metadata.xml file in src > res > raw
   */
  metadataPath: string;

  /**
   * This is required for Android only. Setting this value would save the attachments as Base64 string for easy access.
   */
  isRequiredAttachmentBase64: boolean;

  /**
   * TODO:
   */
  autoSendTime: string;

  /**
   * TODO:
   */
  autoSyncTime: string;
}
export class LoginResult extends UnviredResult {
  type: LoginListenerType;
}

export class AuthenticateActivateResult extends UnviredResult {
  type: AuthenticateAndActivateResultType;
}

export class AuthenticateLocalResult extends UnviredResult {
  type: AuthenticateLocalResultType;
}

@Plugin({
  pluginName: 'UnviredCordovaSDK',
  plugin: 'cordova-plugin-unvired-sdk', // npm package name, example: cordova-plugin-camera
  pluginRef: 'ump', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/unvired/cordova-plugin-unvired-sdk/', // the github repository URL for the plugin
  install: 'ionic cordova plugin add @ionic-native/unvired-cordova-sdk', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['iOS', 'Android', 'Windows', 'Browser'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class UnviredCordovaSDK extends IonicNativePlugin {

  loginParameters: LoginParameters;

  /**
   * Write debug logs.
   * @param sourceClass Name of the class
   * @param method Name of the method
   * @param message The actual message
   * Example:
   * ```
   * this.unviredSDK.logDebug("Class Name", "Method Name", "Log Message")
   * ```
   * would produce the log message like this
   * 01-07-2019 15:52 | DEBUG | Class Name | Method Name | Log Message
   */
  @Cordova()
  logDebug(sourceClass: string, method: string, message: string): Promise<any> {
    return;
  }

  /**
   * Write error logs.
   * @param sourceClass Name of the class
   * @param method Name of the method
   * @param message The actual message
   * Example:
   * ```
   * this.unviredSDK.logError("Class Name", "Method Name", "Log Message")
   * ```
   * would produce the log message like this
   * 01-07-2019 15:52 | ERROR | Class Name | Method Name | Log Message
   */
  @Cordova()
  logError(sourceClass: string, method: string, message: string): Promise<any> {
    return;
  }

  /**
   * Write Info logs.
   * @param sourceClass Name of the class
   * @param method Name of the method
   * @param message The actual message
   * Example:
   * ```
   * this.unviredSDK.logInfo("Class Name", "Method Name", "Log Message")
   * ```
   * would produce the log message like this
   * 01-07-2019 15:52 | IMPORTANT | Class Name | Method Name | Log Message
   */
  @Cordova()
  logInfo(sourceClass: string, method: string, message: string): Promise<any> {
    return;
  }

  /**
   * TODO:
   */
  @Cordova()
  logRead(): Promise<any> {
    return;
  }

  /**
   * TODO:
   */
  @Cordova()
  logDelete(): Promise<any> {
    return;
  }

  /**
   * TODO:
   */
  @Cordova()
  sendLogToServer(): Promise<any> {
    return;
  }

  /**
   * TODO:
   */
  @Cordova()
  sendLogViaEmail(): Promise<any> {
    return;
  }

  /**
   * This api initializes the Unvired Application.
   * @param loginParameters Set of parameters to be passed the login()
   * For Example:
   * ```
   * let loginParameters = new LoginParameters()
   * loginParameters.appName = 'UNVIRED_DIGITAL_FORMS'
   * loginParameters.metadataPath = '../assets/metadata.json'
   * loginParameters.loginType = LoginType.unvired
   * ```
   */
  @Cordova()
  login(loginParameters: LoginParameters): Promise<LoginResult> {
    return;
  }

  /**
   * TODO:
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * Authenticates ( With the Unvired Server ) & activates ( Receives Framework Settings ) the app against UMP
   *  Example:
   *  ```
   *  let loginParameters = new LoginParameters()
   *  loginParameters.username = 'MY_USERNAME'
   *  loginParameters.password = 'MY_PASSWORD'
   *  await this.unviredSDK.authenticateAndActivate(loginParameters)
   *  ```
   * @param loginParameters LoginParamerter instance used to send username / password.
   */
  @Cordova()
  authenticateAndActivate(loginParameters: LoginParameters): Promise<AuthenticateActivateResult> {
    return;
  }

  /**
   * Authenticates the user against the previously saved username & password.
   * For ADS Login, authentication is performed with the ADS Server.
   * @param loginParameters Send username & Password through LoginParameters
   * Example:
   *  ```
   *  let loginParameters = new LoginParameters()
   *  loginParameters.username = 'MY_USERNAME'
   *  loginParameters.password = 'MY_PASSWORD'
   *  await this.unviredSDK.authenticateLocal(loginParameters)
   */
  @Cordova()
  authenticateLocal(loginParameters: LoginParameters): Promise<AuthenticateLocalResult> {
    return;
  }

  /**
   * Get all the accounts configured on the device.
   */
  @Cordova()
  getAllAccounts(): Promise<any> {
    return;
  }

  /**
   * Switch account
   * @param account The account to switch to
   */
  @Cordova()
  switchAccount(account: any): Promise<any> {
    return;
  }

  /**
   * Delete account
   * @param account The account to delete
   */
  @Cordova()
  deleteAccount(account: any): Promise<any> {
    return;
  }

  /**
   * Get all InfoMessages linked to the header.
   * @param headerName Name of the header. Example: CUSTOMER_HEADER
   * @param lid LID of the header.
   */
  @Cordova()
  getInfoMessages(headerName: string, lid: string): Promise<any> {
    return;
  }

  /**
   * Supported for mobile Platforms.
   * Display framework settings.
   */
  @Cordova()
  showSettings(): Promise<any> {
    return;
  }

  /**
   * Get User settings.
   */
  @Cordova()
  userSettings(): Promise<SettingsResult> {
    return;
  }

  /**
   * Update System Credential
   * @param credentials The credential to update to
   */
  @Cordova()
  updateSystemCredentials(credentials: any): Promise<any> {
    return;
  }

  /**
   * Get all system credentials.
   */
  @Cordova()
  getSystemCredentials(): Promise<any> {
    return;
  }

  /**
   * Get version number of unvired-cordova-sdk.
   */
  @Cordova()
  getVersionNumbers(): Promise<any> {
    return;
  }

  /**
   * Delete all data from the device.
   */
  @Cordova()
  clearData(): Promise<any> {
    return;
  }

  /**
   * Check whether the device has internet.
   */
  @Cordova()
  hasInternet(): Promise<any> {
    return;
  }

  /**
   * Get a random id to use as guid.
   */
  @Cordova({ sync: true })
  guid(): string {
    return;
  }

  /**
   * For Debugging Only. pull database file to "temp" folder for development purpose only.
   */
  @Cordova()
  pullDb(): Promise<any> {
    return;
  }

  /**
   * For Debugging Only. ush updated database file from "temp" folder to application directory for development purpose only
   */
  @Cordova()
  pushDb(): Promise<any> {
    return;
  }

  /**
   * Select records from Database
   * @param tableName table name. Example: CUSTOMER_HEADER
   * @param whereClause {Object} Browser: JSON object containing name-value pairs.
   * Mobile: Or a Sqlite whereClause ( without the 'where' keyword )
   * Example:
   * ```
   * # Mobile: Select values from FORM_HEADER table where FORM_ID is 5caed815892215034dacad56
   * this.unviredSDK.dbSelect('FORM_HEADER', "FORM_ID = '5caed815892215034dacad56'")
   * # Mobile & Browser: Select values from FORM_HEADER table where FORM_ID is 5caed815892215034dacad56
   * this.unviredSDK.dbSelect('FORM_HEADER', {"FORM_ID": "5caed815892215034dacad56"})
   * ```
   */
  @Cordova()
  dbSelect(tableName: string, whereClause: any): Promise<DbResult> {
    return;
  }

  /**
   * Insert record into database.
   * In browser platform this function always inserts or updates based on GID.
   * @param tableName Name of the table.
   * @param structureObject - JSON object containing name-value pairs.
   * @param isHeader {boolean} - is DataStructure a header or item?
   * Example:
   * ```
   * # Insert CUSTOMER_HEADER Datastructure into DB.
   * this.unviredsdk.dbInsert("CUSTOMER_HEADER", {"NAME":"TARAK","NO":"0039"}, true);
   * ```
   */
  @Cordova()
  dbInsert(tableName: string, structureObject: any, isHeader: boolean): Promise<DbResult> {
    return;
  }

  /**
   * insert or update the record ( if record exists ) into database.
   * In browser insert always inserts or updates based on gid
   * @param tableName Name of the table
   * @param structureObject - JSON object containing name-value pairs.
   * @param isHeader {boolean}  - is DataStructure a header or item?
   * Example:
   * ```
   * # Insert or update a CUSTOMER_HEADER with NAME as TARAK and NO as '0039'
   * this.unviredsdk.dbInsertOrUpdate("CUSTOMER_HEADER",{"NAME":"TARAK","NO":"0039"},true);
   * ```
   */
  @Cordova()
  dbInsertOrUpdate(tableName: string, structureObject: any, isHeader: boolean): Promise<DbResult> {
    return;
  }

  /**
   * Delete records from the database.
   * @param tableName Name of the table
   * @param whereClause {Object} Browser: JSON object containing name-value pairs.
   * Mobile: Or a Sqlite whereClause ( without the 'where' keyword )
   * Example:
   * ```
   * Select values from FORM_HEADER table where FORM_ID is 5caed815892215034dacad56
   * # Mobile
   * this.unviredSDK.dbDelete('FORM_HEADER', "FORM_ID = '5caed815892215034dacad56'")
   * # Browser & Mobile
   * this.unviredSDK.dbDelete('FORM_HEADER', {"FORM_ID": "5caed815892215034dacad56"})
   * ```
   */
  @Cordova()
  dbDelete(tableName: string, whereClause: any): Promise<DbResult> {
    return;
  }

  /**
   * Update records in database.
   * @param tableName Name of the table
   * @param updatedObject JSON object containing updateds name-value pairs.
   * @param whereClause {Object} Browser: JSON object containing name-value pairs.
   * Mobile: Or a Sqlite where Clause ( without the 'where' keyword )
   * Example:
   * ```
   * Update NAME & NO from FORM_HEADER table where FORM_ID is 5caed815892215034dacad56
   * # Mobile
   * this.unviredSDK.dbUpdate('FORM_HEADER', {"NAME":"TARAK","NO":"0039"}, "FORM_ID = '5caed815892215034dacad56'")
   * # Mobile & Browser
   * this.unviredSDK.dbUpdate('FORM_HEADER', {"NAME":"TARAK","NO":"0039"}, {"FORM_ID": "5caed815892215034dacad56"})
   * ```
   */
  @Cordova()
  dbUpdate(tableName: string, updatedObject: any, whereClause: any): Promise<DbResult> {
    return;
  }

  /**
   * Supported in mobile only.
   * Execute SQL Statement
   * @param query {string} SQL Statement.
   * Example:
   * ```
   * this.unviredSDK.dbExecuteStatement('SELECT * FROM CUSTOMER_HEADER WHERE CUSTOMER_ID = 39')
   * ```
   */
  @Cordova()
  dbExecuteStatement(query: string): Promise<DbResult> {
    return;
  }

  /**
   * Supported in mobile only.
   * Create Savepoint. For more info consult SQLite Documentation ( https://www.sqlite.org/lang_savepoint.html )
   * @param savePoint {string} Name of savepoint
   * Example:
   * ```
   * this.unviredSDK.dbCreateSavePoint('MySavePointName')
   * ```
   */
  @Cordova()
  dbCreateSavePoint(savePoint: string): Promise<DbResult> {
    return;
  }

  /**
   * Supported in mobile only.
   * Release Savepoint. For more info consult SQLite Documentation ( https://www.sqlite.org/lang_savepoint.html )
   * @param savePoint {string} Name of savepoint
   * ```
   * this.unviredSDK.dbReleaseSavePoint('MySavePointName')
   * ```
   */
  @Cordova()
  dbReleaseSavePoint(savePoint: string): Promise<DbResult> {
    return;
  }

  /**
   * Supported in mobile only.
   * Rollback Savepoint. For more info consult SQLite Documentation ( https://www.sqlite.org/lang_savepoint.html )
   * @param savePoint {string} Name of the savepoint
   * Example:
   * ```
   * this.unviredSDK.dbRollbackToSavePoint('MySavePointName')
   * ```
   */
  @Cordova()
  dbRollbackToSavePoint(savePoint: string): Promise<DbResult> {
    return;
  }

  /**
   * Supported in mobile only.
   * Begin database transaction.
   * For more info, consult SQLite documentation ( https://www.sqlite.org/lang_transaction.html )
   * Example:
   * ```
   * this.unviredSDK.dbBeginTransaction()
   * ```
   */
  @Cordova()
  dbBeginTransaction(): Promise<any> {
    return;
  }

  /**
   * Supported in mobile only.
   * End database transaction.
   * For more info, consult SQLite documentation ( https://www.sqlite.org/lang_transaction.html )
   * Example:
   * ```
   * this.unviredSDK.dbEndTransaction()
   * ```
   */
  @Cordova()
  dbEndTransaction(): Promise<any> {
    return;
  }

  /**
   * Supported in Android & Windows only.
   * Launch a file from a file path
   * @param filePath file path
   */
  @Cordova()
  launchFile(filePath: string): Promise<any> {
    return;
  }

  /**
   * Supported in Android & Windows only.
   * Write Base64 string to a file and launch.
   */
  @Cordova()
  launchBase64(base64string: string, fileName: string, extension: string): Promise<any> {
    return;
  }

  /**
   * Supported in Windows Only
   * Unzip file.
   */
  @Cordova()
  unzip(srcPath: string, destPath: string) {
    return;
  }

  /**
   * Get the path for the folder where attachments are stored.
   * Apps can combine this with the attachment filename to construct absolute path to an attachment file.
   */
  @Cordova()
  getAttachmentFolderPath(): Promise<any> {
    return;
  }

  /**
   * Copy attachment file to application folder and insert attachment item to database with updated local path.
   * @param tableName Table name of attachment item.
   * @param structureObject {Object} JSON object containing name-value pairs.
   * Example:
   * ```
   * {'F_NAME':'TARAK','EMP_NO':'0039'}
   * ```
   */
  @Cordova()
  createAttachmentItem(tableName: string, structureObject: any): Promise<any> {
    return;
  }

  /**
   * Upload attachment item to server.
   * @param tableName Table name of attachment item.
   * @param structureObject JSON object containing name-value pairs.
   * @param isAsync Flag which indicates whether the upload should happen in async.
   */
  @Cordova()
  uploadAttachment(tableName: string, structureObject: any, isAsync: boolean): Promise<any> {
    return;
  }

  /**
   * Download attachment from server.
   * @param tableName Table name of attachment item.
   * @param structureObject JSON object containing name-value pairs.
   */
  @Cordova()
  downloadAttachment(tableName: string, structureObject: any): Promise<any> {
    return;
  }

  /**
   * Sends data to UMP in SYNC mode. This means user has to wait until the duration of SYNC call. Only one SYNC call can be active at any point of time. Once the call completes, the result data would be available in the Promise.
   * Apps typically block UI during a SYNC call so that there are user-actions when the SYNC call is active.
   * @param reqype RequestType for the message. Please check RequestType to select the right request type.
   * @param header {Object} Header datastructure to be sent to UMP. Header datastructure is mandatory of the request type is RQST.
   * For PA functions which do not accept any input, set an empty string for this parameter.
   * Example: If Header datastructure needs to be sent, make sure the header datastructure is in the following format:
   * ```
   * {"CUSTOMER_HEADER": {"field1" : "value1", "field2" : "value2"}}
   * ```
   * @param customData {Object} This depends on the PA function. This is useful if you want to send custom data to a PA function.
   * Example: You can also use this parameter to send header datastrucrture provided the data structure is formatted like this.
   * ```
   * {
   *   "CATEGORY_BE": [{
   *     "CATEGORY_HEADER": {"field1" : "value1", "field2" : "value2"}
   *   }]
   * }
   * ```
   * @param paFunction Name of the Process Agent function to be executed. Example: PA_MOBILE_EXECUTE_SALES_ORDER.
   * @param autoSave This defines whether to save the response to database.
   */
  @Cordova()
  syncForeground(reqype: RequestType, header: any, customData: any, paFunction: string, autoSave: boolean): Promise<SyncResult> {
    return;
  }

  /**
   * Sends data to UMP in ASYNC mode. This means user can make this call and continue with other program execution.
   * The result of the call would be notified through the observable returned for the function registerNotifListener().
   * @param reqype RequestType for the message. Please check RequestType to select the right request type.
   * @param header {Object} Header datastructure to be sent to UMP. Header datastructure is mandatory of the request type is RQST.
   * For PA functions which do not accept any input, set an empty string for this parameter.
   * Example: If Header datastructure needs to be sent, make sure the header datastructure is in the following format:
   * ```
   * {"CUSTOMER_HEADER": {"field1" : "value1", "field2" : "value2"}}
   * ```
   * @param customData {Object} This depends on the PA function. This is useful if you want to send custom data to a PA function.
   * Example: You can also use this parameter to send header datastrucrture provided the data structure is formatted like this.
   * ```
   * {
   *   "CATEGORY_BE": [{
   *     "CATEGORY_HEADER": {"field1" : "value1", "field2" : "value2"}
   *   }]
   * }
   * ```
   * @param paFunction Name of the Process Agent function to be executed. Example: PA_MOBILE_EXECUTE_SALES_ORDER.
   * @param beName Name of the Business Entity
   * @param belid LID of the Header datastructure
   * @param bypassAttachment Set this flag to false if you want to upload attachments first and then make the server call.
   */
  @Cordova()
  syncBackground(reqype: RequestType, header: any, customData: any, paFunction: string, beName: string, belid: string, bypassAttachment: boolean): Promise<SyncResult> {
    return;
  }

  /**
   * For Browser platform only.
   * Reinitialize web db. Use this api to initialize db from persisted local storage db
   */
  @Cordova()
  dbReload() {
    return;
  }

  /**
   * For Browser platform only.
   * Generate Unvired BusinessEntity json from header and items
   * @param headerName Header Table Name
   * @param header Header Datastructure object
   * @param itemName Item Table Name
   * @param items Array of Item Structures.
   */
  @Cordova()
  generateUBJson(headerName: string, header: any, itemName: string, items: any) {
    return;
  }

  /**
   * For Browser platform only.
   * parseRawUBJson - Parse response json returned from syncForeground api.
   * @param json JSON string
   */
  @Cordova()
  parseRawUBJson(json: string) {
    return;
  }

  /**
   * For Browser platform only.
   * Returns a collection of all entities which belong to |tableName|
   * @param tableName Name of the table Exanple: CUSTOMER_HEADER
   */
  @Cordova()
  dbGetCollection(tableName: string) {
    return;
  }

  /**
   * Places a request to download all pending messages for the logged in user in UMP.
   * To keep track of returned data, you would need to register a notification listener (registerNotifListener()) & subscribe to the observable.
   */
  @Cordova()
  getMessages() {
    return;
  }

  /**
   * Subscribe to this observable to listen for life-cyle events in the case of an async message.
   * Only one class can subscribe to notifications are any point of time.
   */
  @Cordova({
    observable: true
  })
  registerNotifListener(): Observable<NotifResult> {
    return;
  }

  /**
   * Supported in mobile only
   * Check whether a Header datastructure is in outbox.
   * @param beLid LID of the Header datastructure.
   */
  @Cordova()
  isInOutBox(beLid: string): Promise<UnviredResult> {
    return;
  }

  /**
   * Supported in mobile only
   * Returns the count of outbox items.
   */
  @Cordova()
  outBoxItemCount(): Promise<string> {
    return;
  }

  /**
   * Supported in mobile only
   * Checks whether a Header datastructure is in sent and is waiting for response.
   * Typically you would use before allowing the user to update the Header datastructure.
   * @param beLid LID of the Business Entity
   */
  @Cordova()
  isInSentItem(beLid: string): Promise<UnviredResult> {
    return;
  }

  /**
   * Supported in mobile only
   * Returns the count of sent items.
   */
  @Cordova()
  sentItemCount(): Promise<string> {
    return;
  }

  /**
   * Supported in mobile only
   * Returns the count of Inbox items.
   */
  @Cordova()
  inBoxItemCount(): Promise<string> {
    return;
  }

  /**
   * Supported in mobile only
   * Delete outbox entry for a Header datastructure.
   * @param beLid LID of the Business Entity
   */
  @Cordova()
  deleteOutBoxEntry(beLid: string): Promise<any> {
    return;
  }

  /**
   * Resets sync data with the application such as outbox, inbox & sent item entries.
   * You may want to call this function before switching account.
   */
  @Cordova()
  resetApplicationSyncData(): Promise<any> {
    return;
  }

  /**
   * For Browser platform only
   * Helps in updating application database without reauthenticating with server which requires to drop both app and framework database.
   */
  reCreateAppDB(): Promise<any> {
    return;
  }
}
