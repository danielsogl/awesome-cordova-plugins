"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 * The File class implements static convenience functions to access files and directories.
 *
 * Example:
 * ```
 * import { File } from 'ionic-native';
 *
 * declare var cordova: any;
 * const fs:string = cordova.file.dataDirectory;
 * File.checkDir(this.fs, 'mydir').then(_ => console.log('yay')).catch(err => console.log('boooh'));
 * ```
 *
 *  This plugin is based on several specs, including : The HTML5 File API http://www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http://www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http://www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http://dev.w3.org/2009/dap/file-system/file-writer.html
 */
var File = (function () {
    function File() {
    }
    File.getFreeDiskSpace = function () {
        return;
    };
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dir Name of directory to check
     * @return {Promise<boolean|FileError>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
     */
    File.checkDir = function (path, dir) {
        if ((/^\//.test(dir))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var fullpath = path + dir;
        return File.resolveDirectoryUrl(fullpath)
            .then(function () {
            return true;
        });
    };
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @return {Promise<DirectoryEntry|FileError>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
     */
    File.createDir = function (path, dirName, replace) {
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getDirectory(fse, dirName, options);
        });
    };
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @return {Promise<RemoveResult|FileError>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.removeDir = function (path, dirName) {
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return File.remove(de);
        });
    };
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destionation path to the directory
     * @param {string} newDirName The destination directory name
     * @return {Promise<DirectoryEntry|Entry|FileError>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
     */
    File.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        newDirName = newDirName || dirName;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return File.move(srcde, deste, newDirName);
            });
        });
    };
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @return {Promise<Entry|FileError>} Returns a Promise that resolves to the new Entry object or rejects with an error.
     */
    File.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return File.copy(srcde, deste, newDirName);
            });
        });
    };
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @return {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
     */
    File.listDir = function (path, dirName) {
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getDirectory(fse, dirName, { create: false, exclusive: false });
        })
            .then(function (de) {
            var reader = de.createReader();
            return File.readEntries(reader);
        });
    };
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @return {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
     */
    File.removeRecursively = function (path, dirName) {
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return File.rimraf(de);
        });
    };
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file to check
     * @return {Promise<boolean|FileError>} Returns a Promise that resolves with a boolean or rejects with an error.
     */
    File.checkFile = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveLocalFilesystemUrl(path + file)
            .then(function (fse) {
            if (fse.isFile) {
                return true;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a file';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @return {Promise<FileEntry|FileError>} Returns a Promise that resolves to a FileEntry or rejects with an error.
     */
    File.createFile = function (path, fileName, replace) {
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, fileName, options);
        });
    };
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to remove
     * @return {Promise<RemoveResult|FileError>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.removeFile = function (path, fileName) {
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, fileName, { create: false });
        })
            .then(function (fe) {
            return File.remove(fe);
        });
    };
    /** Write a new file to the desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @param {boolean | WriteOptions} replaceOrOptions replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    File.writeFile = function (path, fileName, text, replaceOrOptions) {
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var opts = {};
        if (replaceOrOptions) {
            if (typeof (replaceOrOptions) === 'boolean') {
                opts.replace = replaceOrOptions;
            }
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, fileName, opts);
        })
            .then(function (fe) {
            return File.createWriter(fe);
        })
            .then(function (writer) {
            if (opts.append) {
                writer.seek(writer.length);
            }
            if (opts.hasOwnProperty('truncate')) {
                writer.truncate(opts.truncate);
            }
            return File.write(writer, text);
        });
    };
    /** Write to an existing file.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    File.writeExistingFile = function (path, fileName, text) {
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, fileName, { create: false });
        })
            .then(function (fe) {
            return File.createWriter(fe);
        })
            .then(function (writer) {
            return File.write(writer, text);
        });
    };
    /**
     * Read the contents of a file as text.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @return {Promise<string|FileError>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
     */
    File.readAsText = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, file, { create: false });
        })
            .then(function (fe) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fe.file(function (file) {
                    reader.readAsText(file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Read file and return data as a base64 encoded data url.
     * A data url is of the form:
     *      data:[<mediatype>][;base64],<data>
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @return {Promise<string|FileError>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
     */
    File.readAsDataURL = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, file, { create: false });
        })
            .then(function (fe) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fe.file(function (file) {
                    reader.readAsDataURL(file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Read file and return data as a binary data.
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @return {Promise<string|FileError>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
     */
    File.readAsBinaryString = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, file, { create: false });
        })
            .then(function (fe) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fe.file(function (file) {
                    reader.readAsBinaryString(file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Read file and return data as an ArrayBuffer.
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @return {Promise<ArrayBuffer|FileError>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
     */
    File.readAsArrayBuffer = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, file, { create: false });
        })
            .then(function (fe) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fe.file(function (file) {
                    reader.readAsArrayBuffer(file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @return {Promise<Entry|FileError>} Returns a Promise that resolves to the new Entry or rejects with an error.
     */
    File.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return File.move(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @return {Promise<Entry|FileError>} Returns a Promise that resolves to an Entry or rejects with an error.
     */
    File.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return File.copy(srcfe, deste, newFileName);
            });
        });
    };
    // these private methods help avoid cascading error handling
    // in the public ones, primarily simply wrapping callback
    // operations to return Promises that can then be chained.
    /**
     * @private
     */
    File.fillErrorMessage = function (err) {
        err.message = File.cordovaFileError[err.code];
    };
    /**
     * @private
     */
    File.resolveLocalFilesystemUrl = function (furl) {
        return new Promise(function (resolve, reject) {
            try {
                window.resolveLocalFileSystemURL(furl, function (entry) {
                    resolve(entry);
                }, function (err) {
                    File.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                File.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @private
     */
    File.resolveDirectoryUrl = function (durl) {
        return File.resolveLocalFilesystemUrl(durl)
            .then(function (de) {
            if (de.isDirectory) {
                return de;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a directory';
                return Promise.reject(err);
            }
        });
    };
    /**
     * @private
     */
    File.getDirectory = function (fse, dn, flags) {
        return new Promise(function (resolve, reject) {
            try {
                fse.getDirectory(dn, flags, function (de) {
                    resolve(de);
                }, function (err) {
                    File.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                File.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @private
     */
    File.getFile = function (fse, fn, flags) {
        return new Promise(function (resolve, reject) {
            try {
                fse.getFile(fn, flags, function (fe) {
                    resolve(fe);
                }, function (err) {
                    File.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                File.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @private
     */
    File.remove = function (fe) {
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.move = function (srce, destdir, newName) {
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.copy = function (srce, destdir, newName) {
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.readEntries = function (dr) {
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.rimraf = function (de) {
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.createWriter = function (fe) {
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve();
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @private
     */
    File.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return new Promise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    File.cordovaFileError = {
        1: 'NOT_FOUND_ERR',
        2: 'SECURITY_ERR',
        3: 'ABORT_ERR',
        4: 'NOT_READABLE_ERR',
        5: 'ENCODING_ERR',
        6: 'NO_MODIFICATION_ALLOWED_ERR',
        7: 'INVALID_STATE_ERR',
        8: 'SYNTAX_ERR',
        9: 'INVALID_MODIFICATION_ERR',
        10: 'QUOTA_EXCEEDED_ERR',
        11: 'TYPE_MISMATCH_ERR',
        12: 'PATH_EXISTS_ERR',
        13: 'WRONG_ENTRY_TYPE',
        14: 'DIR_READ_ERR',
    };
    __decorate([
        plugin_1.Cordova()
    ], File, "getFreeDiskSpace", null);
    File = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-file',
            pluginRef: 'cordova.file',
            repo: 'https://github.com/apache/cordova-plugin-file'
        })
    ], File);
    return File;
}());
exports.File = File;
//# sourceMappingURL=file.js.map