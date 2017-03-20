import { GoogleMapsLatLngBounds, GoogleMapsLatLng } from '../../src/plugins/googlemap';

declare var window: any;

class LatLngBounds {
  public southwest: GoogleMapsLatLng;
  public northeast: GoogleMapsLatLng;

  constructor(latLngArray: GoogleMapsLatLng[]) {
    this.southwest = latLngArray[0];
    this.northeast = latLngArray[1];
  }
}

window.plugin = {
  google: {
    maps: {
      LatLngBounds
    }
  }
};

describe('GoogleMapsLatLngBounds', () => {

  const southwest = new GoogleMapsLatLng(1,1);
  const northeast = new GoogleMapsLatLng(4,4);
  let object;

  it('should create an object', () => {
    object = new GoogleMapsLatLngBounds([southwest, northeast]);
    expect(object).toBeDefined();
  });

  it('northwest property should be defined', () => expect(object.northeast).toBeDefined());

  it('southwest property should be defined', () => expect(object.southwest).toBeDefined());



});
