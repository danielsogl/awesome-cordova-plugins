console.log(window.Native);

Native.Camera.takePicture().then(function(resp) {
  console.log('Got picture');
}, function(err) {
  console.log('ERROR');
});
