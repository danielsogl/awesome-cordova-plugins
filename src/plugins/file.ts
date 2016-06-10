import {Plugin, Cordova} from './plugin';

declare var window;

/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 *  This plugin is based on several specs, including : The HTML5 File API http://www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http://www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http://www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http://dev.w3.org/2009/dap/file-system/file-writer.html
 */
@Plugin({
  plugin: 'cordova-plugin-file',
  pluginRef: 'cordova.file',
  repo: 'https://github.com/apache/cordova-plugin-file'
})
export class File {
  static cordovaFileError: {} = {
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
    12: 'PATH_EXISTS_ERR'
  };

  // @Cordova()
  // static getFreeDiskSpace(): Promise<any> { return }

  /**
   * Check if a directory exists in a certain path, directory.
   *
   * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} dir Name of directory to check
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static checkDir(path: string, dir: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    if ((/^\//.test(dir))) {
      rejectFn('directory cannot start with \/');
    }

    if (!(/\/$/.test(dir))) {
      path += '/';
    }

    try {
      var directory = path + dir;

      window.resolveLocalFileSystemURL(directory, function (fileSystem) {
        if (fileSystem.isDirectory === true) {
          resolveFn(fileSystem);
        } else {
          rejectFn({code: 13, message: 'input is not a directory'});
        }
      }, function (error) {
        error.message = File.cordovaFileError[error.code];
        rejectFn(error);
      });
    } catch (err) {
      err.message = File.cordovaFileError[err.code];
      rejectFn(err);
    }

    return promise;
  }

  /**
   * Creates a new directory in the specific path.
   * The replace boolean value determines whether to replace an existing directory with the same name.
   * If an existing directory exists and the replace value is false, the promise will fail and return an error.
   *
   * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} dirName Name of directory to create
   * @param {boolean} replace If true, replaces file with same name. If false returns error
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static createDir(path: string, dirName: string, replace: boolean): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    if ((/^\//.test(dirName))) {
      rejectFn('directory cannot start with \/');
    }

    replace = !replace;

    var options = {
      create: true,
      exclusive: replace
    };

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getDirectory(dirName, options, function (result) {
          resolveFn(result);
        }, function (error) {
          error.message = File.cordovaFileError[error.code];
          rejectFn(error);
        });
      }, function (err) {
        err.message = File.cordovaFileError[err.code];
        rejectFn(err);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }

  /**
   * Remove a directory at a given path.
   *
   * @param {string} path The path to the directory
   * @param {string} dirName The directory name
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static removeDir(path: string, dirName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    if ((/^\//.test(dirName))) {
      rejectFn('directory cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
          dirEntry.remove(function () {
            resolveFn({success: true, fileRemoved: dirEntry});
          }, function (error: any) {
            error.message = File.cordovaFileError[error.code];
            rejectFn(error);
          });
        }, function (err) {
          err.message = File.cordovaFileError[err.code];
          rejectFn(err);
        });
      }, function (er) {
        er.message = File.cordovaFileError[er.code];
        rejectFn(er);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }

  /**
   * Move a directory to a given path.
   *
   * @param {string} path The source path to the directory
   * @param {string} dirName The source directory name
   * @param {string} newPath The destionation path to the directory
   * @param {string} newDirName The destination directory name
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static moveDir(path: string, dirName: string, newPath: string, newDirName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    newDirName = newDirName || dirName;

    if ((/^\//.test(newDirName))) {
      rejectFn('directory cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
          window.resolveLocalFileSystemURL(newPath, function (newDirEntry) {
            dirEntry.moveTo(newDirEntry, newDirName, function (result) {
              resolveFn(result);
            }, function (error) {
              rejectFn(error);
            });
          }, function (erro) {
            rejectFn(erro);
          });
        }, function (err) {
          rejectFn(err);
        });
      }, function (er) {
        rejectFn(er);
      });
    } catch (e) {
      rejectFn(e);
    }

    return promise;
  }

  /**
   * Copy a directory in various methods. If destination directory exists, will fail to copy.
   *
   * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} dirName Name of directory to copy
   * @param {string} newPath Base FileSystem of new location
   * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static copyDir(path: string, dirName: string, newPath: string, newDirName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    newDirName = newDirName || dirName;

    if ((/^\//.test(newDirName))) {
      rejectFn('directory cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getDirectory(dirName, {create: false, exclusive: false}, function (dirEntry) {

          window.resolveLocalFileSystemURL(newPath, function (newDirEntry) {
            dirEntry.copyTo(newDirEntry, newDirName, function (result) {
              resolveFn(result);
            }, function (error) {
              error.message = File.cordovaFileError[error.code];
              rejectFn(error);
            });
          }, function (erro) {
            erro.message = File.cordovaFileError[erro.code];
            rejectFn(erro);
          });
        }, function (err) {
          err.message = File.cordovaFileError[err.code];
          rejectFn(err);
        });
      }, function (er) {
        er.message = File.cordovaFileError[er.code];
        rejectFn(er);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }

  /**
   * List files and directory from a given path.
   *
   * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} dirName Name of directory
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static listDir(path: string, dirName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    if ((/^\//.test(dirName))) {
      rejectFn('directory cannot start with \/');
    }

    var options = {
      create: false,
      exclusive: false
    };

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getDirectory(dirName, options, function (parent) {
          var reader = parent.createReader();
          reader.readEntries(function (entries) {
            resolveFn(entries);
          }, function () {
            rejectFn('DIR_READ_ERROR : ' + path + dirName);
          });
        }, function (error) {
          error.message = File.cordovaFileError[error.code];
          rejectFn(error);
        });
      }, function (err) {
        err.message = File.cordovaFileError[err.code];
        rejectFn(err);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }

  /**
   * Removes all files and the directory from a desired location.
   *
   * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} dirName Name of directory
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static removeRecursively(path: string, dirName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    if ((/^\//.test(dirName))) {
      rejectFn('directory cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
          dirEntry.removeRecursively(function () {
            resolveFn({success: true, fileRemoved: dirEntry});
          }, function (error) {
            error.message = File.cordovaFileError[error.code];
            rejectFn(error);
          });
        }, function (err) {
          err.message = File.cordovaFileError[err.code];
          rejectFn(err);
        });
      }, function (er) {
        er.message = File.cordovaFileError[er.code];
        rejectFn(er);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }

  /**
   * Check if a file exists in a certain path, directory.
   *
   * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} file Name of file to check
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static checkFile(path: string, file: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    if ((/^\//.test(file))) {
      rejectFn('file cannot start with \/');
    }

    if (!(/\/$/.test(file))) {
      path += '/';
    }

    try {
      var directory = path + file;

      window.resolveLocalFileSystemURL(directory, function (fileSystem) {
        if (fileSystem.isFile === true) {
          resolveFn(fileSystem);
        } else {
          rejectFn({code: 13, message: 'input is not a file'});
        }
      }, function (error) {
        error.message = File.cordovaFileError[error.code];
        rejectFn(error);
      });
    } catch (err) {
      err.message = File.cordovaFileError[err.code];
      rejectFn(err);
    }

    return promise;
  }

  /**
   * Creates a new file in the specific path.
   * The replace boolean value determines whether to replace an existing file with the same name.
   * If an existing file exists and the replace value is false, the promise will fail and return an error.
   *
   * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} fileName Name of file to create
   * @param {boolean} replace If true, replaces file with same name. If false returns error
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static createFile(path: string, fileName: string, replace: boolean): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });


    if ((/^\//.test(fileName))) {
      rejectFn('file-name cannot start with \/');
    }

    replace = !replace;

    var options = {
      create: true,
      exclusive: replace
    };

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getFile(fileName, options, function (result) {
          resolveFn(result);
        }, function (error) {
          error.message = File.cordovaFileError[error.code];
          rejectFn(error);
        });
      }, function (err) {
        err.message = File.cordovaFileError[err.code];
        rejectFn(err);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }

  /**
   * Removes a file from a desired location.
   *
   * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} fileName Name of file to remove
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static removeFile(path: string, fileName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    if ((/^\//.test(fileName))) {
      rejectFn('file-name cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
          fileEntry.remove(function () {
            resolveFn({success: true, fileRemoved: fileEntry});
          }, function (error: any) {
            error.message = File.cordovaFileError[error.code];
            rejectFn(error);
          });
        }, function (err) {
          err.message = File.cordovaFileError[err.code];
          rejectFn(err);
        });
      }, function (er) {
        er.message = File.cordovaFileError[er.code];
        rejectFn(er);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }

  // static writeFile(path: string, fileName: string, text: string, replace: boolean): Promise<any> { return }

  // static writeExistingFile(path: string, fileName: string, text: string): Promise<any> { return }

  /**
   * Read a file as string.
   *
   * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} fileName Name of file to move
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static readAsText(path: string, fileName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    if ((/^\//.test(fileName))) {
      rejectFn('file-name cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
          fileEntry.file(function (file) {
            var reader = new FileReader();

            reader.onloadend = function(e) {
              if (this.result !== undefined && this.result !== null) {
                resolveFn(this.result);
              } else if (this.error !== undefined && this.error !== null) {
                rejectFn(this.error);
              } else {
                rejectFn({code: null, message: 'READER_ONLOADEND_ERR'});
              }
            };

            reader.readAsText(file);
          }, function (error) {
            error.message = File.cordovaFileError[error.code];
            rejectFn(error);
          });
        }, function (err) {
          err.message = File.cordovaFileError[err.code];
          rejectFn(err);
        });
      }, function (er) {
        er.message = File.cordovaFileError[er.code];
        rejectFn(er);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }

  // static readAsDataURL(path: string, file: string): Promise<any> { return }

  // static readAsBinaryString(path: string, file: string): Promise<any> { return }

  // static readAsArrayBuffer(path: string, file: string): Promise<any> { return }

  /**
   * Move a file to a given path.
   *
   * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} fileName Name of file to move
   * @param {string} newPath Base FileSystem of new location
   * @param {string} newFileName New name of file to move to (leave blank to remain the same)
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static moveFile(path: string, fileName: string, newPath: string, newFileName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    newFileName = newFileName || fileName;

    if ((/^\//.test(newFileName))) {
      rejectFn('file-name cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
          window.resolveLocalFileSystemURL(newPath, function (newFileEntry) {
            fileEntry.moveTo(newFileEntry, newFileName, function (result) {
              resolveFn(result);
            }, function (error) {
              rejectFn(error);
            });
          }, function (err) {
            rejectFn(err);
          });
        }, function (err) {
          rejectFn(err);
        });
      }, function (er) {
        rejectFn(er);
      });
    } catch (e) {
      rejectFn(e);
    }

    return promise;
  }

  /**
   * Copy a file in various methods. If file exists, will fail to copy.
   *
   * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
   * @param {string} fileName Name of file to copy
   * @param {string} newPath Base FileSystem of new location
   * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
   * @return Returns a Promise that resolves or rejects with an error.
   */
  static copyFile(path: string, fileName: string, newPath: string, newFileName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; });

    newFileName = newFileName || fileName;

    if ((/^\//.test(newFileName))) {
      rejectFn('file-name cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getFile(fileName, {create: false, exclusive: false}, function (fileEntry) {

          window.resolveLocalFileSystemURL(newPath, function (newFileEntry) {
            fileEntry.copyTo(newFileEntry, newFileName, function (result) {
              resolveFn(result);
            }, function (error) {
              error.message = File.cordovaFileError[error.code];
              rejectFn(error);
            });
          }, function (erro) {
            erro.message = File.cordovaFileError[erro.code];
            rejectFn(erro);
          });
        }, function (err) {
          err.message = File.cordovaFileError[err.code];
          rejectFn(err);
        });
      }, function (er) {
        er.message = File.cordovaFileError[er.code];
        rejectFn(er);
      });
    } catch (e) {
      e.message = File.cordovaFileError[e.code];
      rejectFn(e);
    }

    return promise;
  }
}
