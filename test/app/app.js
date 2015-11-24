console.log(window.Native);


if(Native.Camera.installed()) {
  console.log('Camera installed');
} else {
  console.log('Camera not installed');
}
Native.Camera.takePicture().then(function(resp) {
  console.log('Got picture');
}, function(err) {
  console.log('ERROR');
});
