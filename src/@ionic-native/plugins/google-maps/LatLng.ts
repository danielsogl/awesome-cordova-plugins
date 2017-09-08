
export interface ILatLng {
  lat: number;
  lng: number;
}

/**
 * @hidden
 */
export class LatLng implements ILatLng {

  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  equals(other: ILatLng): boolean {
    return this.lat === other.lat && this.lng === other.lng;
  }

  toString(): string {
    return this.lat + ',' + this.lng;
  }

  toUrlValue(precision?: number): string {
    precision = precision || 6;

    return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
  }
}
