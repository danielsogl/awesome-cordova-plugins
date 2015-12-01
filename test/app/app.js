
console.log(window.IonicNative);

if(IonicNative.Camera.installed()) {
  console.log('Camera installed');
} else {
  console.log('Camera not installed');
}

if(IonicNative.Geolocation.installed()) {
  console.log('Geolocation installed');
  IonicNative.Geolocation.getCurrentPosition().then(function(pos) {
    console.log('POSITION', pos);
  })
} else {
  console.log('Geolocation not installed');
}
/*
Native.Camera.takePicture().then(function(resp) {
  console.log('Got picture');
}, function(err) {
  console.log('ERROR');
});

if(Native.AppLinks.installed()) {
  console.log('AppLinks installed');
} else {
  console.log('AppLinks not installed');
}
*/

if(IonicNative.StatusBar.installed()) {
  console.log('StatusBar installed');
  IonicNative.StatusBar.hide().catch(function(err) {
    console.error('unable to set statusbar', err);
  });
} else {
  console.log('StatusBar not installed');
}
