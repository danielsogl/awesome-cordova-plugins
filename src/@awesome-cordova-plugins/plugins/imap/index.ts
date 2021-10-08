import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface Config {
  /**
   * Hostname or IP address of the IMAP service, for example: imap.gmail.com, imap-mail.outlook.com....
   */
  host: string;
  /**
   * Optional parameter. Port of the IMAP server to connect.
   * Default set to: 993
   */
  port?: number;
  /**
   * iOS ONLY
   * Optional parameter. Encryption type to use.
   * Default set to: TLS/SSL
   */
  connectionType?: ConnectionType;
  /**
   * Username or email address for authentication.
   */
  user: string;
  /**
   * Password for authentication.
   */
  password: string;
}

export interface Connection {
  /**
   * Connection Status: true or false, "true" means connected successfully; "false" means failed to connect.
   */
  status: boolean;
  /**
   * Optional parameter. A connection string, returned as a confirmation for successful connection.
   */
  connection?: string;
  /**
   * Optional parameter. Error, returned if the connecting process has failed.
   */
  exception?: string;
}

export interface MessageHeaders {
  /**
   * Message consecutive number.
   */
  messageNumber: number;
  /**
   * The name of the folder where the message is contained.
   */
  folder: string;
  /**
   * Sender's data.
   */
  from: Address[];
  /**
   * TO recipients data.
   */
  toRecipients: Address[];
  /**
   * CC recipients data.
   */
  ccRecipients: Address[];
  /**
   * BCC recipients data.
   */
  bccRecipients: Address[];
  /**
   * The date when the message was received.
   */
  receivedDate: string;
  /**
   * Message's subject header.
   */
  subject: string;
  /**
   * Message's active flags.
   */
  flags: string[];
}

export interface Message {
  /**
   * Message consecutive number.
   */
  messageNumber: number;
  /**
   * The name of the folder where the message is contained.
   */
  folder: string;
  /**
   * Sender's data.
   */
  from: Address[];
  /**
   * All recipients data.
   */
  allRecipients: Address[];
  /**
   * TO recipients data.
   */
  toRecipients: Address[];
  /**
   * CC recipients data.
   */
  ccRecipients: Address[];
  /**
   * BCC recipients data.
   */
  bccRecipients: Address[];
  /**
   * Reply data.
   */
  replyTo: Address[];
  /**
   * Date when the message was sent.
   */
  sentDate: string;
  /**
   * The date when the message was received.
   */
  receivedDate: string;
  /**
   * Message's subject header.
   */
  subject: string;
  /**
   * Android ONLY
   * Optional. Short description for the message.
   */
  description?: string;
  /**
   *
   */
  fileName: string;
  /**
   * Android ONLY
   * Optional.
   */
  disposition?: string;
  /**
   * Message's active flags.
   */
  flags: string[];
  /**
   * Android ONLY
   * Optional.
   */
  lineCount?: number;
  /**
   * Android ONLY
   * Optional. All Headers available on a message.
   */
  allMessageHeaders?: object;
  /**
   * Android ONLY
   * Optional. Type of message's content.
   */
  contentType?: string;
  /**
   * Message's body with its content and attachments.
   */
  bodyContent: Content[];
  /**
   * Message's memory size.
   */
  size: number;
}

export interface Address {
  /**
   * Email address.
   */
  address: string;
  /**
   * Optional. Name of the email address's owner.
   */
  personal?: string;
  /**
   * Android ONLY
   * Optional. Data type.
   */
  type?: string;
}

export interface Content {
  /**
   * Content data type.
   */
  type: string;
  /**
   * Optional. The name of the file.
   */
  fileName?: string;
  /**
   * Message's content.
   */
  content: string;
}

export interface ModificationResult {
  /**
   * Status of the applied changes. "True" success; "False" failure
   */
  status: boolean;
  /**
   * Array with consecutive numbers of modified messages.
   */
  modifiedMessages: number[];
}

export enum ConnectionType {
  /**
   * Clear-text connection for the protocol.
   */
  Clear = 'Clear',
  /**
   * Starts with clear-text connection at the beginning, then switch to encrypted connection using TLS/SSL.
   */
  StartTLS = 'StartTLS',
  /**
   * Encrypted connection using TLS/SSL.
   */
  TLSSSL = 'TLS/SSL',
}

export enum Comparison {
  /**
   * Android ONLY
   * The less than or equal to operator.
   */
  LE = 'LE',
  /**
   * The less than operator.
   */
  LT = 'LT',
  /**
   * The equality operator.
   */
  EQ = 'EQ',
  /**
   * The not equal to operator.
   */
  NE = 'NE',
  /**
   * Android ONLY
   * The greater than operator.
   */
  GT = 'GT',
  /**
   * The greater than or equal to operator.
   */
  GE = 'GE',
}

/**
 * All available message flags. Set or remove flag using "setFlag()".
 */
export enum FlagEnum {
  /**
   * "ANSWERED" message flag
   */
  ANSWERED = 'ANSWERED',
  /**
   * "DRAFT" message flag
   */
  DRAFT = 'DRAFT',
  /**
   * "FLAGGED" message flag
   */
  FLAGGED = 'FLAGGED',
  /**
   * Android ONLY
   * "RECENT" message flag
   */
  RECENT = 'RECENT',
  /**
   * "SEEN" message flag
   */
  SEEN = 'SEEN',
  /**
   * Android ONLY
   * "USER" message flag
   */
  USER = 'USER',
  /**
   * "DELETED" message flag. Note: Add this flag to delete the message from the mailbox
   */
  DELETED = 'DELETED',
  /**
   * iOS ONLY
   * "SENT" message flag.
   */
  SENT = 'Sent',
  /**
   * iOS ONLY
   * "FORWARDED" message flag.
   */
  FORWARDED = 'Forwarded',
  /**
   * iOS ONLY
   * "SubmitPending" message flag.
   */
  SubmitPending = 'SubmitPending',
  /**
   * iOS ONLY
   * "SUBMITTED" message flag.
   */
  SUBMITTED = 'Submitted',
}

/**
 * @name Imap
 * @description
 * This plugin will enable a Cordova application to use the IMAP (Internet Message Access Protocol) features
 * The plugin offers support for Android and iOS.
 * To enable the IMAP features on Android, this plugin uses the framework [Java Mail API](https://javaee.github.io/javamail/) and for iOS, it uses the [MailCore 2](http://libmailcore.com/) library.
 *
 *
 * @usage
 * ```typescript
 * import { Imap } from '@awesome-cordova-plugins/imap/ngx';
 *
 *
 * constructor(private imap: Imap) { }
 *
 * ...
 *
 *
 * this.imap.connect({
 *  host: 'imap.gmail.com',
 *  port: 993,
 *  connectionType: ConnectionType.TLSSSL  // (iOS ONLY) Encryption type to use. Default set to: TLS/SSL
 *  user: 'my_email@gmail.com',
 *  password: 'my-pass'
 * })
 *   .then((res: Connection) => console.log(res))
 *   .catch((error) => console.error(error));
 *
 *
 *
 *  this.imap.disconnect()
 *   .then((res: boolean) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 *
 * this.imap.isConnected()
 *   .then((res: boolean) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * // Note: Connected to an IMAP service is REQUIRED to be able to get data from the below functions.
 *
 *
 * // listMailFolders('*') using a '*' pattern will return all folder names
 * // listMailFolders('INBOX*') using a pattern with a folder name will list all the subfolder names of that folder that match the pattern
 *
 *   this.imap.listMailFolders('*')
 *   .then((res: boolean) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 *   this.imap.getMessageCountByFolderName('INBOX')
 *   .then((res: number) => {
 *   // Returns the count of the messages in the folder as a result
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *
 *   this.imap.searchMessagesByDatePeriod('INBOX', 1601503200000, Comparison.GE)
 *   .then((res: number[]) => {
 *   // Returns array with messages' consecutive numbers
 *   // ex. [1207, 1208, 1209]
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   this.imap.listMessagesHeadersByConsecutiveNumber('INBOX', 1200, 1280)
 *   .then((res: MessageHeaders[]) => {
 *   //  Returns array with messages' headers data
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   this.imap.listMessagesHeadersByDate('INBOX', 1601503200000, Comparison.GE)
 *   .then((res: MessageHeaders[]) => {
 *   // Returns array with messages' headers data
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   this.imap.getFullMessageData('INBOX', 1205)
 *   .then((res: Message) => {
 *   // Returns "Message" object with the full message data including attachments.
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *  this.imap.getFullMessageDataOnNewSession({
 *      host: 'imap.gmail.com',
 *      port: 993,
 *      connectionType: ConnectionType.TLSSSL  // (iOS ONLY) Encryption type to use. Default set to: TLS/SSL
 *      user: 'my_email@gmail.com',
 *      password: 'my-pass'
 *    }, 'INBOX', 1205)
 *   .then((res: Message) => {
 *   // Returns "Message" object with the full message data including attachments.
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   this.imap.copyToFolder('INBOX', 'Spam', [1204, 1205, 1206, 1207])
 *   .then((res: boolean) => {
 *   // Returns "true" if the process is successful, else returns "false".
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   * Sets a flag on a message
 *   * "setFlag()" can be used for deleting messages setting the Delete flag to "FlagEnum.DELETED"
 *   this.imap.setFlag('INBOX', [1206, 1205, 1204], FlagEnum.SEEN, true)
 *   .then((res: ModificationResult) => {
 *
 *    // res.status - return true or false based on the deletion success
 *
 *   //res.modifiedMessages - for ex.[1206, 1205, 1204];
 *
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 * ```
 */
@Plugin({
  pluginName: 'Imap',
  plugin: 'cordova-plugin-imap',
  pluginRef: 'imap',
  repo: 'https://github.com/aleksandar888/cordova-plugin-imap.git',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Imap extends AwesomeCordovaNativePlugin {
  /**
   * This function "connect(clientData: Config)" tries to connect and authenticate with the IMAP server.
   * @param clientData {Config} Connection configuration
   * @return {Promise<Connection>} Returns a promise with the connection data
   */
  @Cordova()
  connect(clientData: Config): Promise<Connection> {
    return;
  }

  /**
   * "disconnect()" Closes the connection with the server.
   * @return {Promise<boolean>} Returns a promise status.
   */
  @Cordova()
  disconnect(): Promise<boolean> {
    return;
  }

  /**
   * "isConnected()" Checks the current state of the connection.
   * @return {Promise<boolean>} Returns a promise with connection status
   */
  @Cordova()
  isConnected(): Promise<boolean> {
    return;
  }

  /**  Note: Connected to an IMAP service is REQUIRED to be able to get data from the below functions.  */

  /**
   * Returns an array of Folder names based on a regular expression pattern.
   *
   * Example:
   *
   * listMailFolders('*') using a '*' pattern will return all folder names
   * listMailFolders('INBOX*') using a pattern with a folder name will list all the subfolder names that match the pattern
   *
   *
   * "listMailFolders(pattern: string)" Lists the name of mail folders in the mailbox.
   * @param pattern {string} Regular expression pattern.
   * @return {Promise<string[]>} Returns array of folder names matching the pattern.
   */
  @Cordova()
  listMailFolders(pattern: string): Promise<string[]> {
    return;
  }

  /**
   * "getMessageCountByFolderName(folderName: string)" Gets the count of the messages in the folder.
   * @param folderName {string} The name of the desired folder.
   * @return {Promise<number>} Returns the consecutive number of the last message.
   */
  @Cordova()
  getMessageCountByFolderName(folderName: string): Promise<number> {
    return;
  }

  /**
   * "searchMessagesByDatePeriod(folderName: string, dateInMilliseconds: number, comparison: Comparison)" Returns the messages' consecutive number.
   * @param folderName {string} The name of the desired folder
   * @param dateInMilliseconds {number} Date in milliseconds
   * @param comparison {Comparison} A comparison operator
   * @return {Promise<number[]>} Returns array with the messages' consecutive numbers.
   */
  @Cordova()
  searchMessagesByDatePeriod(
    folderName: string,
    dateInMilliseconds: number,
    comparison: Comparison
  ): Promise<number[]> {
    return;
  }

  /**
   * "listMessagesHeadersByConsecutiveNumber(folderName: string, start: number, end: number)" Returns messages' headers data based on a "start" and "end" message consecutive number.
   * @param folderName {string} The name of the desired folder
   * @param start {number} Consecutive number of the first message.
   * @param end {number} Consecutive number of the last message
   * @return {Promise<MessageHeaders[]>} Returns array with the messages' headers data.
   */
  @Cordova()
  listMessagesHeadersByConsecutiveNumber(folderName: string, start: number, end: number): Promise<MessageHeaders[]> {
    return;
  }

  /**
   * "listMessagesHeadersByDate(folderName: string, dateInMilliseconds: number, comparison: Comparison)" Returns messages' headers data based on a date.
   * @param folderName {string} The name of the desired folder
   * @param dateInMilliseconds {number} Date in milliseconds.
   * @param comparison {Comparison} A comparison operator
   * @return {Promise<MessageHeaders[]>} Returns array messages' headers data.
   */
  @Cordova()
  listMessagesHeadersByDate(
    folderName: string,
    dateInMilliseconds: number,
    comparison: Comparison
  ): Promise<MessageHeaders[]> {
    return;
  }

  /**
   * "getFullMessageData(folderName: string, messageNumber: number)" Returns the full message data including its attachments.
   * @param folderName {string} The name the message's folder.
   * @param messageNumber {number} Message's consecutive number.
   * @return {Promise<Message>} Returns "Message" object with full message data.
   */
  @Cordova()
  getFullMessageData(folderName: string, messageNumber: number): Promise<Message> {
    return;
  }

  /**
   *
   * This function "getFullMessageDataOnNewSession(clientData: Config, folderName: string, messageNumber: number)" downloads the full message data using a
   * separate session with the server. It is suitable for downloading message data while the app is already connected to a third server.
   * "getFullMessageDataOnNewSession(clientData: Config, folderName: string, messageNumber: number)" Returns the full message data including its attachments.
   * @param clientData {Config} Connection configuration.
   * @param folderName {string} The name the message's folder.
   * @param messageNumber {number} Message's consecutive number.
   * @return {Promise<Message>} Returns "Message" object with full message data.
   */
  @Cordova()
  getFullMessageDataOnNewSession(clientData: Config, folderName: string, messageNumber: number): Promise<Message> {
    return;
  }

  /**
   * "copyToFolder(sourceFolder: string, destinationFolder: string, messageNums: number[])" Copy messages to a desired folder.
   * @param sourceFolder {string} The name of the source folder.
   * @param destinationFolder {string} The name of the destination folder.
   * @param messageNums {number[]} Array with messages' consecutive numbers or array with single message consecutive number.
   * @return {Promise<Message>} Returns boolean status of the process.
   */
  @Cordova()
  copyToFolder(sourceFolder: string, destinationFolder: string, messageNums: number[]): Promise<boolean> {
    return;
  }

  /**
   * "setFlag(folderName: string, messageNums: number[], flag: FlagEnum, status: boolean)" Set or remove flag from a message
   * @param folderName {string} The name of the source folder where the messages are contained.
   * @param messageNums {number[]} Array with messages' consecutive numbers or array with single message consecutive number
   * @param flag {FlagEnum} Desired message flag.
   * @param status {boolean} Set status to "true" to set the flag on a message; or to "false" to remove the flag from the message
   * @return {Promise<ModificationResult>} Returns object with status and array with messages' consecutive numbers of the modified messages
   */
  @Cordova()
  setFlag(folderName: string, messageNums: number[], flag: FlagEnum, status: boolean): Promise<ModificationResult> {
    return;
  }
}
