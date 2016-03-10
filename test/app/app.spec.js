describe('cordova', function(){

  it('should be defined', function() {

    expect('window.cordova').not.toBe('undefined');

  });

});

describe("IonicNative", function() {
  it('should be defined', function(){
    expect(window.IonicNative).not.toBe('undefined');
  })
});

var IonicNative = window.IonicNative;


describe("ActionSheet", function() {

  it('should show', function() {
    spyOn(window.plugins.actionsheet, 'show');
    IonicNative.ActionSheet.show();
    expect(window.plugins.actionsheet.show).toHaveBeenCalled();
  });

  it('should hide', function(){
    spyOn(window.plugins.actionsheet, 'hide');
    IonicNative.ActionSheet.hide();
    expect(window.plugins.actionsheet.hide).toHaveBeenCalled();
  });

});

describe("Geolocation", function() {

  it('should get the current location', function(){
    spyOn(window.navigator.geolocation, 'getCurrentPosition');
    IonicNative.Geolocation.getCurrentPosition();
    expect(window.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });

  it('should watch position', function() {
    spyOn(window.navigator.geolocation, 'watchPosition');
    spyOn(window.navigator.geolocation, 'clearWatch');
    var _geoLocationSubscription = IonicNative.Geolocation.watchPosition().subscribe();
    expect(window.navigator.geolocation.watchPosition).toHaveBeenCalled();
    _geoLocationSubscription.unsubscribe();
    expect(window.navigator.geolocation.clearWatch).toHaveBeenCalled();
  });

});
