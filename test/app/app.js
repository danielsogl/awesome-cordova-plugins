
document.addEventListener('deviceready', function() {

  console.log(window.Native);

  alert('in here!');

  if(Native.Camera.installed()) {
    alert('here!');
    console.log('Camera installed');
  } else {
    alert('No cam');
    console.log('Camera not installed');
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

  if(Native.StatusBar.installed()) {
    console.log('StatusBar installed');
    Native.StatusBar.hide().catch(function(err) {
      console.error('unable to set statusbar', err);
    });
  } else {
    alert('No statusbar');
    console.log('StatusBar not installed');
  }

})
