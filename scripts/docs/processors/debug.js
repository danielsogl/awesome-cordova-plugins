"use strict";
module.exports = function test(){
  return {
    name: 'debug',
    $runBefore: ['rendering-docs'],
    $process: function(docs){
      docs.forEach(function(doc){
        if (doc.name == "Camera"){

          console.log(doc.tags);
          doc.tags.forEach(function(tag){
            if(tag.tagName == 'classes'){

            }
          });

          doc.moduleDoc.exports.forEach(function(d,i){
            if(d.name === 'CameraOptions') {
              console.log('Name: ' + d.name);
              console.log('Type: ' + d.docType);
              console.log('First member: ', d.members[0]);
            }
          });


          var exports = doc.exportSymbol.parent.exports;
          for(var p in exports) {
            if(p == 'CameraOptions')
            {
              var x = exports[p];
              console.log(x.members.quality);
            }
          }
          doc.members.forEach(function(method){
            if (method.name === "getPicture") {
              console.log(method);
            }
          })
        }
      })
    }
  }
}
