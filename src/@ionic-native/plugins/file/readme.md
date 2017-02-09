
<a style="float:right;font-size:12px;" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/file/index.ts#L338">
  Improve this doc
</a>

# File
<!-- end header block -->

```
$ ionic plugin add cordova-plugin-file
```

## [Usage Documentation](https://ionicframework.com/docs/v2/native/file/)

Cordova Repo: [https://github.com/apache/cordova-plugin-file](https://github.com/apache/cordova-plugin-file)

<!-- description -->
This plugin implements a File API allowing read/write access to files residing on the device.

The File class implements static convenience functions to access files and directories.

Example:
```
import { File } from 'ionic-native';

declare var cordova: any;
const fs:string = cordova.file.dataDirectory;
File.checkDir(this.fs, 'mydir').then(_ => console.log('yay')).catch(err => console.log('boooh'));
```

 This plugin is based on several specs, including : The HTML5 File API http://www.w3.org/TR/FileAPI/
 The (now-defunct) Directories and System extensions Latest: http://www.w3.org/TR/2012/WD-file-system-api-20120417/
 Although most of the plugin code was written when an earlier spec was current: http://www.w3.org/TR/2011/WD-file-system-api-20110419/
 It also implements the FileWriter spec : http://dev.w3.org/2009/dap/file-system/file-writer.html
<!-- end for prop in method.decorators[0].argumentInfo -->
<!-- end content block -->
<!-- end body block -->
