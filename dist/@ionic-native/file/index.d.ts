import { IonicNativePlugin } from '@ionic-native/core';
export interface IFile extends Blob {
    /**
     * Name of the file, without path information
     */
    name: string;
    /**
     * Last modified date
     */
    lastModified: number;
    /**
     * Last modified date
     */
    lastModifiedDate: number;
    /**
     * Size in bytes
     */
    size: number;
    /**
     * File mime type
     */
    type: string;
    localURL: string;
    start: number;
    end: number;
    /**
     * Returns a "slice" of the file. Since Cordova Files don't contain the actual
     * content, this really returns a File with adjusted start and end.
     * Slices of slices are supported.
     * @param start {Number} The index at which to start the slice (inclusive).
     * @param end {Number} The index at which to end the slice (exclusive).
     */
    slice(start: number, end: number): Blob;
}
export interface LocalFileSystem {
    /**
     * Used for storage with no guarantee of persistence.
     */
    TEMPORARY: number;
    /**
     * Used for storage that should not be removed by the user agent without application or user permission.
     */
    PERSISTENT: number;
    /**
     * Requests a filesystem in which to store application data.
     * @param type Whether the filesystem requested should be persistent, as defined above. Use one of TEMPORARY or PERSISTENT.
     * @param size This is an indicator of how much storage space, in bytes, the application expects to need.
     * @param successCallback The callback that is called when the user agent provides a filesystem.
     * @param errorCallback A callback that is called when errors happen, or when the request to obtain the filesystem is denied.
     */
    requestFileSystem(type: number, size: number, successCallback: FileSystemCallback, errorCallback?: ErrorCallback): void;
    /**
     * Allows the user to look up the Entry for a file or directory referred to by a local URL.
     * @param url A URL referring to a local file in a filesystem accessable via this API.
     * @param successCallback A callback that is called to report the Entry to which the supplied URL refers.
     * @param errorCallback A callback that is called when errors happen, or when the request to obtain the Entry is denied.
     */
    resolveLocalFileSystemURL(url: string, successCallback: EntryCallback, errorCallback?: ErrorCallback): void;
    /**
     * see requestFileSystem.
     */
    webkitRequestFileSystem(type: number, size: number, successCallback: FileSystemCallback, errorCallback?: ErrorCallback): void;
}
export interface Metadata {
    /**
     * This is the time at which the file or directory was last modified.
     * @readonly
     */
    modificationTime: Date;
    /**
     * The size of the file, in bytes. This must return 0 for directories.
     * @readonly
     */
    size: number;
}
export interface Flags {
    /**
     * Used to indicate that the user wants to create a file or directory if it was not previously there.
     */
    create?: boolean;
    /**
     * By itself, exclusive must have no effect. Used with create, it must cause getFile and getDirectory to fail if the target path already exists.
     */
    exclusive?: boolean;
}
/**
 * This export interface represents a file system.
 */
export interface FileSystem {
    /**
     * This is the name of the file system. The specifics of naming filesystems is unspecified, but a name must be unique across the list of exposed file systems.
     * @readonly
     */
    name: string;
    /**
     * The root directory of the file system.
     * @readonly
     */
    root: DirectoryEntry;
    toJSON(): string;
    encodeURIPath(path: string): string;
}
export interface Entry {
    /**
     * Entry is a file.
     */
    isFile: boolean;
    /**
     * Entry is a directory.
     */
    isDirectory: boolean;
    /**
     * Look up metadata about this entry.
     * @param successCallback A callback that is called with the time of the last modification.
     * @param errorCallback ErrorCallback A callback that is called when errors happen.
     */
    getMetadata(successCallback: MetadataCallback, errorCallback?: ErrorCallback): void;
    /**
     * Set the metadata of the entry.
     * @param successCallback {Function} is called with a Metadata object
     * @param errorCallback {Function} is called with a FileError
     * @param metadataObject {Metadata} keys and values to set
     */
    setMetadata(successCallback: MetadataCallback, errorCallback: ErrorCallback, metadataObject: Metadata): void;
    /**
     * The name of the entry, excluding the path leading to it.
     */
    name: string;
    /**
     * The full absolute path from the root to the entry.
     */
    fullPath: string;
    /**
     * The file system on which the entry resides.
     */
    filesystem: FileSystem;
    /**
     * an alternate URL which can be used by native webview controls, for example media players.
     */
    nativeURL: string;
    /**
     * Move an entry to a different location on the file system. It is an error to try to:
     *
     * <ui>
     * <li>move a directory inside itself or to any child at any depth;</li>
     * <li>move an entry into its parent if a name different from its current one isn't provided;</li>
     * <li>move a file to a path occupied by a directory;</li>
     * <li>move a directory to a path occupied by a file;</li>
     * <li>move any element to a path occupied by a directory which is not empty.</li>
     * <ul>
     *
     * A move of a file on top of an existing file must attempt to delete and replace that file.
     * A move of a directory on top of an existing empty directory must attempt to delete and replace that directory.
     */
    moveTo(parent: DirectoryEntry, newName?: string, successCallback?: EntryCallback, errorCallback?: ErrorCallback): void;
    /**
     * Copy an entry to a different location on the file system. It is an error to try to:
     *
     * <ul>
     * <li> copy a directory inside itself or to any child at any depth;</li>
     * <li> copy an entry into its parent if a name different from its current one isn't provided;</li>
     * <li> copy a file to a path occupied by a directory;</li>
     * <li> copy a directory to a path occupied by a file;</li>
     * <li> copy any element to a path occupied by a directory which is not empty.</li>
     * <li> A copy of a file on top of an existing file must attempt to delete and replace that file.</li>
     * <li> A copy of a directory on top of an existing empty directory must attempt to delete and replace that directory.</li>
     * </ul>
     *
     * Directory copies are always recursive--that is, they copy all contents of the directory.
     */
    copyTo(parent: DirectoryEntry, newName?: string, successCallback?: EntryCallback, errorCallback?: ErrorCallback): void;
    /**
     * Returns a URL that can be used to identify this entry. Unlike the URN defined in [FILE-API-ED], it has no specific expiration; as it describes a location on disk, it should be valid at least as long as that location exists.
     */
    toURL(): string;
    /**
     * Return a URL that can be passed across the bridge to identify this entry.
     * @return string URL that can be passed across the bridge to identify this entry
     */
    toInternalURL(): string;
    /**
     * Deletes a file or directory. It is an error to attempt to delete a directory that is not empty. It is an error to attempt to delete the root directory of a filesystem.
     * @param successCallback A callback that is called on success.
     * @param errorCallback A callback that is called when errors happen.
     */
    remove(successCallback: VoidCallback, errorCallback?: ErrorCallback): void;
    /**
     * Look up the parent DirectoryEntry containing this Entry. If this Entry is the root of its filesystem, its parent is itself.
     * @param successCallback A callback that is called to return the parent Entry.
     * @param errorCallback A callback that is called when errors happen.
     */
    getParent(successCallback: DirectoryEntryCallback, errorCallback?: ErrorCallback): void;
}
/**
 * This export interface represents a directory on a file system.
 */
export interface DirectoryEntry extends Entry {
    /**
     * Creates a new DirectoryReader to read Entries from this Directory.
     */
    createReader(): DirectoryReader;
    /**
     * Creates or looks up a file.
     * @param path Either an absolute path or a relative path from this DirectoryEntry to the file to be looked up or created. It is an error to attempt to create a file whose immediate parent does not yet exist.
     * @param options
     *     <ul>
     *     <li>If create and exclusive are both true, and the path already exists, getFile must fail.</li>
     *     <li>If create is true, the path doesn't exist, and no other error occurs, getFile must create it as a zero-length file and return a corresponding FileEntry.</li>
     *     <li>If create is not true and the path doesn't exist, getFile must fail.</li>
     *     <li>If create is not true and the path exists, but is a directory, getFile must fail.</li>
     *     <li>Otherwise, if no other error occurs, getFile must return a FileEntry corresponding to path.</li>
     *     </ul>
     * @param successCallback A callback that is called to return the File selected or created.
     * @param errorCallback A callback that is called when errors happen.
     */
    getFile(path: string, options?: Flags, successCallback?: FileEntryCallback, errorCallback?: ErrorCallback): void;
    /**
     * Creates or looks up a directory.
     * @param path Either an absolute path or a relative path from this DirectoryEntry to the directory to be looked up or created. It is an error to attempt to create a directory whose immediate parent does not yet exist.
     * @param options
     *     <ul>
     *     <li>If create and exclusive are both true and the path already exists, getDirectory must fail.</li>
     *     <li>If create is true, the path doesn't exist, and no other error occurs, getDirectory must create and return a corresponding DirectoryEntry.</li>
     *     <li>If create is not true and the path doesn't exist, getDirectory must fail.</li>
     *     <li>If create is not true and the path exists, but is a file, getDirectory must fail.</li>
     *     <li>Otherwise, if no other error occurs, getDirectory must return a DirectoryEntry corresponding to path.</li>
     *     </ul>
     * @param successCallback   A callback that is called to return the DirectoryEntry selected or created.
     * @param errorCallback A callback that is called when errors happen.
     *
     */
    getDirectory(path: string, options?: Flags, successCallback?: DirectoryEntryCallback, errorCallback?: ErrorCallback): void;
    /**
     * Deletes a directory and all of its contents, if any. In the event of an error [e.g. trying to delete a directory that contains a file that cannot be removed], some of the contents of the directory may be deleted. It is an error to attempt to delete the root directory of a filesystem.
     * @param successCallback A callback that is called on success.
     * @param errorCallback A callback that is called when errors happen.
     */
    removeRecursively(successCallback: VoidCallback, errorCallback?: ErrorCallback): void;
}
/**
 * This export interface lets a user list files and directories in a directory. If there are no additions to or deletions from a directory between the first and last call to readEntries, and no errors occur, then:
 * <ul>
 * <li> A series of calls to readEntries must return each entry in the directory exactly once.</li>
 * <li> Once all entries have been returned, the next call to readEntries must produce an empty array.</li>
 * <li> If not all entries have been returned, the array produced by readEntries must not be empty.</li>
 * <li> The entries produced by readEntries must not include the directory itself ["."] or its parent [".."].</li>
 * </ul>
 */
export interface DirectoryReader {
    localURL: string;
    hasReadEntries: boolean;
    /**
     * Read the next block of entries from this directory.
     * @param successCallback Called once per successful call to readEntries to deliver the next previously-unreported set of Entries in the associated Directory. If all Entries have already been returned from previous invocations of readEntries, successCallback must be called with a zero-length array as an argument.
     * @param errorCallback A callback indicating that there was an error reading from the Directory.
     */
    readEntries(successCallback: EntriesCallback, errorCallback?: ErrorCallback): void;
}
/**
 * This export interface represents a file on a file system.
 */
export interface FileEntry extends Entry {
    /**
     * Creates a new FileWriter associated with the file that this FileEntry represents.
     * @param successCallback A callback that is called with the new FileWriter.
     * @param errorCallback A callback that is called when errors happen.
     */
    createWriter(successCallback: FileWriterCallback, errorCallback?: ErrorCallback): void;
    /**
     * Returns a File that represents the current state of the file that this FileEntry represents.
     * @param successCallback A callback that is called with the File.
     * @param errorCallback A callback that is called when errors happen.
     */
    file(successCallback: FileCallback, errorCallback?: ErrorCallback): void;
}
/**
 * When requestFileSystem() succeeds, the following callback is made.
 */
export interface FileSystemCallback {
    /**
     * @param filesystem The file systems to which the app is granted access.
     */
    (filesystem: FileSystem): void;
}
/**
 * This export interface is the callback used to look up Entry objects.
 */
export interface EntryCallback {
    /**
     * @param entry
     */
    (entry: Entry): void;
}
/**
 * This export interface is the callback used to look up FileEntry objects.
 */
export interface FileEntryCallback {
    /**
     * @param entry
     */
    (entry: FileEntry): void;
}
/**
 * This export interface is the callback used to look up DirectoryEntry objects.
 */
export interface DirectoryEntryCallback {
    /**
     * @param entry
     */
    (entry: DirectoryEntry): void;
}
/**
 * When readEntries() succeeds, the following callback is made.
 */
export interface EntriesCallback {
    (entries: Entry[]): void;
}
/**
 * This export interface is the callback used to look up file and directory metadata.
 */
export interface MetadataCallback {
    (metadata: Metadata): void;
}
/**
 * This export interface is the callback used to create a FileWriter.
 */
export interface FileWriterCallback {
    (fileWriter: FileWriter): void;
}
/**
 * This export interface is the callback used to obtain a File.
 */
export interface FileCallback {
    (file: IFile): void;
}
/**
 * This export interface is the generic callback used to indicate success of an asynchronous method.
 */
export interface VoidCallback {
    (): void;
}
/**
 * When an error occurs, the following callback is made.
 */
export interface ErrorCallback {
    (err: FileError): void;
}
export interface RemoveResult {
    success: boolean;
    fileRemoved: Entry;
}
/** @hidden */
export declare class FileSaver extends EventTarget {
    /**
     * When the FileSaver constructor is called, the user agent must return a new FileSaver object with readyState set to INIT.
     * This constructor must be visible when the script's global object is either a Window object or an object implementing the WorkerUtils interface.
     */
    constructor(data: Blob);
    /**
     * When the abort method is called, user agents must run the steps below:
     * <ol>
     * <li> If readyState == DONE or readyState == INIT, terminate this overall series of steps without doing anything else. </li>
     * <li> Set readyState to DONE. </li>
     * <li> If there are any tasks from the object's FileSaver task source in one of the task queues, then remove those tasks. </li>
     * <li> Terminate the write algorithm being processed. </li>
     * <li> Set the error attribute to a DOMError object of type "AbortError". </li>
     * <li> Fire a progress event called abort </li>
     * <li> Fire a progress event called writeend </li>
     * <li> Terminate this algorithm. </li>
     * </ol>
     */
    abort(): void;
    /**
     * The blob is being written.
     * @readonly
     */
    INIT: number;
    /**
     * The object has been constructed, but there is no pending write.
     * @readonly
     */
    WRITING: number;
    /**
     * The entire Blob has been written to the file, an error occurred during the write, or the write was aborted using abort(). The FileSaver is no longer writing the blob.
     * @readonly
     */
    DONE: number;
    /**
     * The FileSaver object can be in one of 3 states. The readyState attribute, on getting, must return the current state, which must be one of the following values:
     * <ul>
     * <li>INIT</li>
     * <li>WRITING</li>
     * <li>DONE</li>
     * <ul>
     * @readonly
     */
    readyState: number;
    /**
     * The last error that occurred on the FileSaver.
     * @readonly
     */
    error: Error;
    /**
     * Handler for writestart events
     */
    onwritestart: (event: ProgressEvent) => void;
    /**
     * Handler for progress events.
     */
    onprogress: (event: ProgressEvent) => void;
    /**
     * Handler for write events.
     */
    onwrite: (event: ProgressEvent) => void;
    /**
     * Handler for abort events.
     */
    onabort: (event: ProgressEvent) => void;
    /**
     * Handler for error events.
     */
    onerror: (event: ProgressEvent) => void;
    /**
     * Handler for writeend events.
     */
    onwriteend: (event: ProgressEvent) => void;
}
/**
 * @hidden
 * This interface expands on the FileSaver interface to allow for multiple write actions, rather than just saving a single Blob.
 */
export declare class FileWriter extends FileSaver {
    /**
     * The byte offset at which the next write to the file will occur. This must be no greater than length.
     * A newly-created FileWriter must have position set to 0.
     */
    position: number;
    /**
     * The length of the file. If the user does not have read access to the file, this must be the highest byte offset at which the user has written.
     */
    length: number;
    /**
     * Write the supplied data to the file at position.
     * @param data The blob to write.
     */
    write(data: ArrayBuffer | Blob | string): void;
    /**
     * Seek sets the file position at which the next write will occur.
     * @param offset If nonnegative, an absolute byte offset into the file. If negative, an offset back from the end of the file.
     */
    seek(offset: number): void;
    /**
     * Changes the length of the file to that specified. If shortening the file, data beyond the new length must be discarded. If extending the file, the existing data must be zero-padded up to the new length.
     * @param size The size to which the length of the file is to be adjusted, measured in bytes.
     */
    truncate(size: number): void;
}
export interface IWriteOptions {
    replace?: boolean;
    append?: boolean;
    truncate?: number;
}
/** @hidden */
export declare class FileError {
    constructor(code: number);
    static NOT_FOUND_ERR: number;
    static SECURITY_ERR: number;
    static ABORT_ERR: number;
    static NOT_READABLE_ERR: number;
    static ENCODING_ERR: number;
    static NO_MODIFICATION_ALLOWED_ERR: number;
    static INVALID_STATE_ERR: number;
    static SYNTAX_ERR: number;
    static INVALID_MODIFICATION_ERR: number;
    static QUOTA_EXCEEDED_ERR: number;
    static TYPE_MISMATCH_ERR: number;
    static PATH_EXISTS_ERR: number;
    /** Error code */
    code: number;
    message: string;
}
/** @hidden */
export declare class FileReader {
    static EMPTY: number;
    static LOADING: number;
    static DONE: number;
    static READ_CHUNK_SIZE: number;
    readyState: number;
    error: Error;
    result: string | ArrayBuffer;
    onloadstart: (evt: ProgressEvent) => void;
    onprogress: (evt: ProgressEvent) => void;
    onload: (evt: ProgressEvent) => void;
    onerror: (evt: ProgressEvent) => void;
    onloadend: (evt: ProgressEvent) => void;
    onabort: (evt: ProgressEvent) => void;
    abort(): void;
    readAsText(fe: IFile, encoding?: string): void;
    readAsDataURL(fe: IFile): void;
    readAsBinaryString(fe: IFile): void;
    readAsArrayBuffer(fe: IFile): void;
    /**
     * @hidden
     */
    [key: string]: any;
}
/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 * The File class implements static convenience functions to access files and directories.
 *
 * Example:
 * ```
 * import { File } from '@ionic-native/file';
 *
 * constructor(private file: File) { }
 *
 * ...
 *
 * this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
 *
 * ```
 *
 *  This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html
 *  @interfaces
 *  IFile
 *  Entry
 *  DirectoryEntry
 *  DirectoryReader
 *  FileSystem
 */
export declare class File extends IonicNativePlugin {
    /**
     *  Read-only directory where the application is installed.
     */
    applicationDirectory: string;
    /**
     *  Read-only directory where the application is installed.
     */
    applicationStorageDirectory: string;
    /**
     * Where to put app-specific data files.
     */
    dataDirectory: string;
    /**
     * Cached files that should survive app restarts.
     * Apps should not rely on the OS to delete files in here.
     */
    cacheDirectory: string;
    /**
     * Android: the application space on external storage.
     */
    externalApplicationStorageDirectory: string;
    /**
     *  Android: Where to put app-specific data files on external storage.
     */
    externalDataDirectory: string;
    /**
     * Android: the application cache on external storage.
     */
    externalCacheDirectory: string;
    /**
     * Android: the external storage (SD card) root.
     */
    externalRootDirectory: string;
    /**
     * iOS: Temp directory that the OS can clear at will.
     */
    tempDirectory: string;
    /**
     * iOS: Holds app-specific files that should be synced (e.g. to iCloud).
     */
    syncedDataDirectory: string;
    /**
     * iOS: Files private to the app, but that are meaningful to other applications (e.g. Office files)
     */
    documentsDirectory: string;
    /**
     * BlackBerry10: Files globally available to all apps
     */
    sharedDirectory: string;
    cordovaFileError: any;
    /**
     * Get free disk space in Bytes
     * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
     */
    getFreeDiskSpace(): Promise<number>;
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dir Name of directory to check
     * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
     */
    checkDir(path: string, dir: string): Promise<boolean>;
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
     */
    createDir(path: string, dirName: string, replace: boolean): Promise<DirectoryEntry>;
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    removeDir(path: string, dirName: string): Promise<RemoveResult>;
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destionation path to the directory
     * @param {string} newDirName The destination directory name
     * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
     */
    moveDir(path: string, dirName: string, newPath: string, newDirName: string): Promise<DirectoryEntry | Entry>;
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
     */
    copyDir(path: string, dirName: string, newPath: string, newDirName: string): Promise<Entry>;
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
     */
    listDir(path: string, dirName: string): Promise<Entry[]>;
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
     */
    removeRecursively(path: string, dirName: string): Promise<RemoveResult>;
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file to check
     * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
     */
    checkFile(path: string, file: string): Promise<boolean>;
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
     */
    createFile(path: string, fileName: string, replace: boolean): Promise<FileEntry>;
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to remove
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    removeFile(path: string, fileName: string): Promise<RemoveResult>;
    /** Write a new file to the desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    writeFile(path: string, fileName: string, text: string | Blob | ArrayBuffer, options?: IWriteOptions): Promise<any>;
    /** Write content to FileEntry.
     *
     * @hidden
     * @param {FileEntry} fe file entry object
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    private writeFileEntry(fe, text, options);
    /** Write to an existing file.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    writeExistingFile(path: string, fileName: string, text: string | Blob): Promise<void>;
    /**
     * Read the contents of a file as text.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
     */
    readAsText(path: string, file: string): Promise<string>;
    /**
     * Read file and return data as a base64 encoded data url.
     * A data url is of the form:
     *      data: [<mediatype>][;base64],<data>
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
     */
    readAsDataURL(path: string, file: string): Promise<string>;
    /**
     * Read file and return data as a binary data.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
     */
    readAsBinaryString(path: string, file: string): Promise<string>;
    /**
     * Read file and return data as an ArrayBuffer.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
     */
    readAsArrayBuffer(path: string, file: string): Promise<ArrayBuffer>;
    private readFile<T>(path, file, readAs);
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
     */
    moveFile(path: string, fileName: string, newPath: string, newFileName: string): Promise<Entry>;
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
     */
    copyFile(path: string, fileName: string, newPath: string, newFileName: string): Promise<Entry>;
    /**
     * @hidden
     */
    private fillErrorMessage(err);
    /**
     * Resolves a local file system URL
     * @param fileUrl {string} file system url
     * @returns {Promise<Entry>}
     */
    resolveLocalFilesystemUrl(fileUrl: string): Promise<Entry>;
    /**
     * Resolves a local directory url
     * @param directoryUrl {string} directory system url
     * @returns {Promise<DirectoryEntry>}
     */
    resolveDirectoryUrl(directoryUrl: string): Promise<DirectoryEntry>;
    /**
     * Get a directory
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param directoryName {string} Directory name
     * @param flags {Flags} Options
     * @returns {Promise<DirectoryEntry>}
     */
    getDirectory(directoryEntry: DirectoryEntry, directoryName: string, flags: Flags): Promise<DirectoryEntry>;
    /**
     * Get a file
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param fileName {string} File name
     * @param flags {Flags} Options
     * @returns {Promise<FileEntry>}
     */
    getFile(directoryEntry: DirectoryEntry, fileName: string, flags: Flags): Promise<FileEntry>;
    /**
     * @hidden
     */
    private remove(fe);
    /**
     * @hidden
     */
    private move(srce, destdir, newName);
    /**
     * @hidden
     */
    private copy(srce, destdir, newName);
    /**
     * @hidden
     */
    private readEntries(dr);
    /**
     * @hidden
     */
    private rimraf(de);
    /**
     * @hidden
     */
    private createWriter(fe);
    /**
     * @hidden
     */
    private write(writer, gu);
    /**
     * @hidden
     */
    private writeFileInChunks(writer, file);
}
