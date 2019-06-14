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

export enum LoginListenerType {
  auth_activation_required = 0,
  app_requires_login,
  auth_activation_success,
  auth_activation_error,
  login_success,
  login_error,
  app_requires_current_account
}

export enum LoginType {
  unvired = 'UNVIRED_ID',
  ads = 'ADS',
  sap = 'SAP',
  custom = 'CUSTOM'
}

export enum ResultType {
  success = 0,
  error
}

export enum RequestType {
  RQST = 0,
  PULL,
  PUSH,
  QUERY,
  REQ
}

export enum NotificationListenerType {
  dataSend = 0, // Notify successful asynchronous send of data to the server.
  dataChanged = 1, // Notify data changes for each BusinessEntity when received data from server.
  dataReceived = 2, // Notify data receive completion on receive of all BusinessEntity
  appReset = 3, // Notify application data reset.
  attachmentDownloadSuccess = 4, //  Notify application with error message and attchment item on attachment download error
  attachmentDownloadError = 5, // Notify application with error message and attchment item on attachment download success
  incomingDataProcessingFinished = 6, // Notify application when incoming data handling finished
  attachmentDownloadWaiting = 7, // Notify application when attachment download is waiting on the server
  infoMessage = 8, // Notify application with any InfoMessages
  serverError = 9, // Notify application with Server errors
  attachmentDownloadCompleted = 10 // Notify attachment downloads completed
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
  data: any;
  message: string;
  type: number;
  error: string;
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
  appName: string;
  company: string;
  username: string;
  password: string;
  url: string;
  domain: string;
  loginType: LoginType;
  feUserId: string;
  port: string;
  metadataPath: string;
  isRequiredAttachmentBase64: boolean;
  autoSendTime: string;
  autoSyncTime: string;
}
export class LoginResult extends UnviredResult {
  type: LoginListenerType;
}
@Plugin({
  pluginName: 'UnviredCordovaSDK',
  plugin: 'cordova-plugin-unvired-sdk', // npm package name, example: cordova-plugin-camera
  pluginRef: 'ump', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/unvired/cordova-plugin-unvired-sdk/', // the github repository URL for the plugin
  install: 'ionic cordova plugin add @ionic-native/unvired-cordova-sdk', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class UnviredCordovaSDK extends IonicNativePlugin {

  loginParameters: LoginParameters;

  @Cordova()
  logDebug(sourceClass: string, method: string, message: string): Promise<any> {
    return;
  }

  @Cordova()
  logError(sourceClass: string, method: string, message: string): Promise<any> {
    return;
  }

  @Cordova()
  logInfo(sourceClass: string, method: string, message: string): Promise<any> {
    return;
  }

  @Cordova()
  logRead(): Promise<any> {
    return;
  }

  @Cordova()
  logDelete(): Promise<any> {
    return;
  }

  @Cordova()
  sendLogToServer(): Promise<any> {
    return;
  }

  @Cordova()
  sendLogViaEmail(): Promise<any> {
    return;
  }

  /**
   * This api initiatilizes the Unvired Application.
   * @param loginParameters
   */
  @Cordova()
  login(loginParameters: LoginParameters): Promise<LoginResult> {
    return;
  }

  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * Authenticates & activates the app against UMP
   * @param loginParameters Send username & Password through loginParameters
   */
  @Cordova()
  authenticateAndActivate(loginParameters: LoginParameters): Promise<LoginResult> {
    return;
  }

  /**
   * Authenticates the user against the locally saved username & password.
   * For ADS Login, authentication is performed with the ADS Server.
   * @param loginParameters Send username & Password through loginParameters
   */
  @Cordova()
  authenticateLocal(loginParameters: LoginParameters): Promise<LoginResult> {
    return;
  }

  @Cordova()
  getAllAccounts(): Promise<any> {
    return;
  }

  @Cordova()
  switchAccount(account: any): Promise<any> {
    return;
  }

  @Cordova()
  deleteAccount(account: any): Promise<any> {
    return;
  }

  @Cordova()
  getInfoMessages(headerName: string, lid: string): Promise<any> {
    return;
  }

  @Cordova()
  showSettings(): Promise<any> {
    return;
  }

  @Cordova()
  userSettings(): Promise<any> {
    return;
  }

  @Cordova()
  updateSystemCredentials(credentials: any): Promise<any> {
    return;
  }

  @Cordova()
  getSystemCredentials(): Promise<any> {
    return;
  }

  @Cordova()
  getVersionNumbers(): Promise<any> {
    return;
  }

  @Cordova()
  clearData(): Promise<any> {
    return;
  }

  @Cordova()
  hasInternet(): Promise<any> {
    return;
  }

  @Cordova()
  guid() {
    return;
  }

  @Cordova()
  dbSelect(tableName: string, whereClause: string): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbInsert(tableName: string, structureObject: any, isHeader: boolean): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbInsertOrUpdate(tableName: string, structureObject: any, isHeader: boolean): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbDelete(tableName: string, whereClause: string): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbUpdate(tableName: string, updatedObject: any, whereClause: string): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbExecuteStatement(query: string): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbCreateSavePoint(savePoint: string): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbReleaseSavePoint(savePoint: string): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbRollbackToSavePoint(savePoint: string): Promise<DbResult> {
    return;
  }

  @Cordova()
  dbBeginTransaction(): Promise<any> {
    return;
  }

  @Cordova()
  dbEndTransaction(): Promise<any> {
    return;
  }

  @Cordova()
  launchFile(filePath: string): Promise<any> {
    return;
  }

  @Cordova()
  launchBase64(base64string: string, fileName: string, extension: string): Promise<any> {
    return;
  }

  @Cordova()
  unzip(srcPath: string, destPath: string) {
    return;
  }

  @Cordova()
  getAttachmentFolderPath(): Promise<any> {
    return;
  }

  @Cordova()
  createAttachmentItem(tableName: string, structureObject: any): Promise<any> {
    return;
  }

  @Cordova()
  uploadAttachment(tableName: string, structureObject: any, isAsync: boolean): Promise<any> {
    return;
  }

  @Cordova()
  downloadAttachment(tableName: string, structureObject: any): Promise<any> {
    return;
  }

  @Cordova()
  syncForeground(reqype: any, header: any, customData: any, paFunction: string, autoSave: boolean): Promise<any> {
    return;
  }

  @Cordova()
  syncBackground(reqype: any, header: any, customData: any, paFunction: string, beName: string, belid: string, bypassAttachment: boolean): Promise<any> {
    return;
  }

  @Cordova()
  getMessages() {
    return;
  }

  @Cordova({
    observable: true,
    clearFunction: 'unRegisterNotifListener'
  })
  registerNotifListener(): Observable<NotifResult> {
    return;
  }

  @Cordova()
  unRegisterNotifListener(): Promise<any> {
    return;
  }

  @Cordova()
  isInOutBox(beLid: string): Promise<UnviredResult> {
    return;
  }

  @Cordova()
  outBoxItemCount(): Promise<string> {
    return;
  }

  @Cordova()
  isInSentItem(beLid: string): Promise<UnviredResult> {
    return;
  }

  @Cordova()
  sentItemCount(): Promise<string> {
    return;
  }

  @Cordova()
  inBoxItemCount(): Promise<string> {
    return;
  }

  @Cordova()
  deleteOutBoxEntry(beLid: string): Promise<any> {
    return;
  }

  @Cordova()
  resetApplicationSyncData(): Promise<any> {
    return;
  }
}
