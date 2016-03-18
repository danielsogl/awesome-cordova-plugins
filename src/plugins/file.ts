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
 *
 * @usage
 *
 * ```ts
 * File.removeRecursively(file.applicationStorageDirectory,
 *                        "tmp").then(result => {}, err => {});
 * ```
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

  static checkDir(path: string, dir: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; })

    if ((/^\//.test(dir))) {
      rejectFn('directory cannot start with \/');
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

  static createDir(path: string, dirName: string, replace: boolean): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; })

    if ((/^\//.test(dirName))) {
      rejectFn('directory cannot start with \/');
    }

    replace = replace ? false : true;

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

  static removeDir(path: string, dirName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; })

    if ((/^\//.test(dirName))) {
      rejectFn('directory cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
          dirEntry.remove(function () {
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

  // static moveDir(path: string, dirName: string, newPath: string, newDirName: string): Promise<any> { return }

  // static copyDir(path: string, dirName: string, newPath: string, newDirName: string): Promise<any> { return }

  static listDir(path: string, dirName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; })

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

  static removeRecursively(path: string, dirName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; })

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

  static checkFile(path: string, file: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; })

    if ((/^\//.test(file))) {
      rejectFn('file cannot start with \/');
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

  static createFile(path: string, fileName: string, replace: boolean): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; })


    if ((/^\//.test(fileName))) {
      rejectFn('file-name cannot start with \/');
    }

    replace = replace ? false : true;

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

  static removeFile(path: string, fileName: string): Promise<any> {
    let resolveFn, rejectFn;
    let promise = new Promise((resolve, reject) => {resolveFn = resolve; rejectFn = reject; })

    if ((/^\//.test(fileName))) {
      rejectFn('file-name cannot start with \/');
    }

    try {
      window.resolveLocalFileSystemURL(path, function (fileSystem) {
        fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
          fileEntry.remove(function () {
            resolveFn({success: true, fileRemoved: fileEntry});
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

  // static writeFile(path: string, fileName: string, text: string, replace: boolean): Promise<any> { return }

  // static writeExistingFile(path: string, fileName: string, text: string): Promise<any> { return }

  // static readAsText(path: string, file: string): Promise<any> { return }

  // static readAsDataURL(path: string, file: string): Promise<any> { return }

  // static readAsBinaryString(path: string, file: string): Promise<any> { return }

  // static readAsArrayBuffer(path: string, file: string): Promise<any> { return }

  // static moveFile(path: string, fileName: string, newPath: string, newFileName: string): Promise<any> { return }

  // static copyFile(path: string, fileName: string, newPath: string, newFileName: string): Promise<any> { return }
}
