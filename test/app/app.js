describe("IonicNative", function() {
  it('should be loaded', function(){
    console.log("Checking if Ionic Native is defined.");
    expect(window.IonicNative).not.toBe('undefined');
  })
});

var IonicNative = window.IonicNative;

describe("Geolocation", function() {

  it('should get the current location', function(){

    console.log("Getting current location");
    expect(IonicNative.Geolocation.getCurrentPosition()).toBe('undefined');
  });

});
