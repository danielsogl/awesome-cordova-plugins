import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Barkoder
 * @description
 * The barKoder Barcode Scanner SDK cordova plugin grants an easy to use solution with a great and completely customizable interface that can be instantly integrated in both iOS and Android apps.
 * @usage
 *
 * ```typescript
 * import { Barkoder } from '@awesome-cordova-plugins/barkoder/ngx';
 *
 * ...
 *
 * constructor(private barkoder: Barkoder, private platform: Platform) { }
 *
 * ...
 *
 * this.platform.ready().then(() => {
 *   this.barkoder.setLicenseKey('YOUR_KEY', true)
 *   .then(() => {
 *      this.barkoder.registerWithLicenseKey('your_license_key')
 *      this.barkoder.initialize('your_license_key')
 *   })
 *   .catch(e => console.log('Error starting Barkoder', e));
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'Barkoder',
  plugin: 'barkoder-cordova',
  pluginRef: 'Barkoder',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Barkoder extends AwesomeCordovaNativePlugin {
  /**
   * Initialize the BarkoderView
   */
  @Cordova()
  initialize(width: number, height: number, x: number, y: number): Promise<any> {
    return;
  }

  /**
   * Register with license key
   */
  @Cordova()
  registerWithLicenseKey(licenseKey: string): Promise<any> {
    return;
  }

  // - Setters
  @Cordova()
  setZoomFactor(zoomFactor: number): Promise<any> {
    return;
  }

  @Cordova()
  setFlashEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  startCamera(): Promise<any> {
    return;
  }

  @Cordova()
  startScanning(): Promise<any> {
    return;
  }

  @Cordova()
  stopScanning(): Promise<any> {
    return;
  }

  @Cordova()
  pauseScanning(): Promise<any> {
    return;
  }

  @Cordova()
  setLocationLineColor(hexColor: string): Promise<any> {
    return;
  }

  @Cordova()
  setLocationLineWidth(lineWidth: number): Promise<any> {
    return;
  }

  @Cordova()
  setRoiLineColor(hexColor: string): Promise<any> {
    return;
  }

  @Cordova()
  setRoiLineWidth(lineWidth: number): Promise<any> {
    return;
  }

  @Cordova()
  setRoiOverlayBackgroundColor(hexColor: string): Promise<any> {
    return;
  }

  @Cordova()
  setCloseSessionOnResultEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setImageResultEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setLocationInImageResultEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setRegionOfInterest(left: number, top: number, width: number, height: number): Promise<any> {
    return;
  }

  @Cordova()
  setThreadsLimit(threadsLimit: number): Promise<any> {
    return;
  }

  @Cordova()
  setLocationInPreviewEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setPinchToZoomEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setRegionOfInterestVisible(regionOfInterestVisible: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setBarkoderResolution(resolution: BarkoderResolution): Promise<any> {
    return;
  }

  @Cordova()
  setBeepOnSuccessEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setVibrateOnSuccessEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  showLogMessages(showLogMessages: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setBarcodeTypeLengthRange(type: string, min: number, max: number): Promise<any> {
    return;
  }

  @Cordova()
  setEncodingCharacterSet(characterSet: string): Promise<any> {
    return;
  }

  @Cordova()
  setDecodingSpeed(decodingSpeed: DecodingSpeed): Promise<any> {
    return;
  }

  @Cordova()
  setFormattingType(formattingType: FormattingType): Promise<any> {
    return;
  }

  @Cordova()
  setCode11ChecksumType(checksumType: Code11ChecksumType): Promise<any> {
    return;
  }

  @Cordova()
  setMsiChecksumType(checksumType: MsiChecksumType): Promise<any> {
    return;
  }

  @Cordova()
  setCode39ChecksumType(checksumType: Code39ChecksumType): Promise<any> {
    return;
  }

  @Cordova()
  setBarcodeTypeEnabled(type: BarcodeType, enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setMulticodeCachingEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setMulticodeCachingDuration(duration: number): Promise<any> {
    return;
  }

  @Cordova()
  setMaximumResultsCount(resultsCount: number): Promise<any> {
    return;
  }

  @Cordova()
  setBarcodeThumbnailOnResultEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setDuplicatesDelayMs(delayMs: number): Promise<any> {
    return;
  }

  @Cordova()
  setThresholdBetweenDuplicatesScans(thresholdBetweenDuplicatesScans: number): Promise<any> {
    return;
  }

  @Cordova()
  setUpcEanDeblurEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setMisshaped1DEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setEnableVINRestrictions(enableVINRestrictions: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setDataMatrixDpmModeEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  configureBarkoder(barkoderConfig: BarkoderConfig): Promise<any> {
    return;
  }

  // - Getters
  @Cordova()
  isFlashAvailable(): Promise<boolean> {
    return;
  }

  @Cordova()
  isCloseSessionOnResultEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isImageResultEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isLocationInImageResultEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isLocationInPreviewEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isPinchToZoomEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isRegionOfInterestVisible(): Promise<boolean> {
    return;
  }

  @Cordova()
  isBeepOnSuccessEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isVibrateOnSuccessEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  getVersion(): Promise<string> {
    return;
  }

  @Cordova()
  getLocationLineColorHex(): Promise<string> {
    return;
  }

  @Cordova()
  getRoiLineColorHex(): Promise<string> {
    return;
  }

  @Cordova()
  getRoiOverlayBackgroundColorHex(): Promise<string> {
    return;
  }

  @Cordova()
  getMaxZoomFactor(): Promise<number> {
    return;
  }

  @Cordova()
  getLocationLineWidth(): Promise<number> {
    return;
  }

  @Cordova()
  getRoiLineWidth(): Promise<number> {
    return;
  }

  @Cordova()
  getRegionOfInterest(): Promise<number> {
    return;
  }

  @Cordova()
  getBarcodeTypeLengthRange(type: number): Promise<number> {
    return;
  }

  @Cordova()
  getMsiChecksumType(): Promise<any> {
    return;
  }

  @Cordova()
  getCode39ChecksumType(): Promise<any> {
    return;
  }

  @Cordova()
  getCode11ChecksumType(): Promise<any> {
    return;
  }

  @Cordova()
  getEncodingCharacterSet(): Promise<any> {
    return;
  }

  @Cordova()
  getDecodingSpeed(): Promise<DecodingSpeed> {
    return;
  }

  @Cordova()
  getFormattingType(): Promise<any> {
    return;
  }

  @Cordova()
  getThreadsLimit(): Promise<any> {
    return;
  }

  @Cordova()
  getMaximumResultsCount(): Promise<any> {
    return;
  }

  @Cordova()
  getDuplicatesDelayMs(): Promise<any> {
    return;
  }

  @Cordova()
  isBarcodeTypeEnabled(type: number): Promise<boolean> {
    return;
  }

  @Cordova()
  getMulticodeCachingEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  getMulticodeCachingDuration(): Promise<boolean> {
    return;
  }

  @Cordova()
  isUpcEanDeblurEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isMisshaped1DEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isBarcodeThumbnailOnResultEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  getThresholdBetweenDuplicatesScans(): Promise<any> {
    return;
  }

  @Cordova()
  isVINRestrictionsEnabled(): Promise<any> {
    return;
  }

  @Cordova()
  getBarkoderResolution(): Promise<any> {
    return;
  }
}

export enum DecodingSpeed {
  fast,
  normal,
  slow,
}

export enum FormattingType {
  disabled,
  automatic,
  gs1,
  aamva,
}

export enum MsiChecksumType {
  disabled,
  mod10,
  mod11,
  mod1010,
  mod1110,
  mod11IBM,
  mod1110IBM,
}

export enum Code39ChecksumType {
  disabled,
  enabled,
}

export enum Code11ChecksumType {
  disabled,
  single,
  double,
}

export enum BarkoderResolution {
  normal,
  high,
}

export enum BarcodeType {
  aztec,
  aztecCompact,
  qr,
  qrMicro,
  code128,
  code93,
  code39,
  codabar,
  code11,
  msi,
  upcA,
  upcE,
  upcE1,
  ean13,
  ean8,
  pdf417,
  pdf417Micro,
  datamatrix,
  code25,
  interleaved25,
  itf14,
  iata25,
  matrix25,
  datalogic25,
  coop25,
  code32,
  telepen,
  dotcode,
}

export class BarkoderConfig {
  locationLineColor?: string;
  locationLineWidth?: number;
  roiLineColor?: string;
  roiLineWidth?: number;
  roiOverlayBackgroundColor?: string;
  closeSessionOnResultEnabled?: boolean;
  imageResultEnabled?: boolean;
  locationInImageResultEnabled?: boolean;
  locationInPreviewEnabled?: boolean;
  pinchToZoomEnabled?: boolean;
  regionOfInterestVisible?: boolean;
  barkoderResolution?: BarkoderResolution;
  beepOnSuccessEnabled?: boolean;
  vibrateOnSuccessEnabled?: boolean;
  decoder?: DekoderConfig;

  constructor(config: Partial<BarkoderConfig>) {
    Object.assign(this, config);
  }
}

export class DekoderConfig {
  aztec?: BarcodeConfig;
  aztecCompact?: BarcodeConfig;
  qr?: BarcodeConfig;
  qrMicro?: BarcodeConfig;
  code128?: BarcodeConfigWithLength;
  code93?: BarcodeConfigWithLength;
  code39?: Code39BarcodeConfig;
  codabar?: BarcodeConfigWithLength;
  code11?: Code11BarcodeConfig;
  msi?: MSIBarcodeConfig;
  upcA?: BarcodeConfig;
  upcE?: BarcodeConfig;
  upcE1?: BarcodeConfig;
  ean13?: BarcodeConfig;
  ean8?: BarcodeConfig;
  pdf417?: BarcodeConfig;
  pdf417Micro?: BarcodeConfig;
  datamatrix?: DatamatrixBarcodeConfig;
  code25?: BarcodeConfig;
  interleaved25?: BarcodeConfig;
  itf14?: BarcodeConfig;
  iata25?: BarcodeConfig;
  matrix25?: BarcodeConfig;
  datalogic25?: BarcodeConfig;
  coop25?: BarcodeConfig;
  code32?: BarcodeConfig;
  telepen?: BarcodeConfig;
  dotcode?: BarcodeConfig;
  general?: GeneralSettings;

  constructor(config: Partial<DekoderConfig>) {
    Object.assign(this, config);
  }
}

export class BarcodeConfig {
  enabled?: boolean;

  constructor(config: Partial<BarcodeConfig>) {
    Object.assign(this, config);
  }
}

export class BarcodeConfigWithLength {
  enabled?: boolean;
  minLength?: number;
  maxLength?: number;

  constructor(config: Partial<BarcodeConfigWithLength>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class MSIBarcodeConfig {
  enabled?: boolean;
  minLength?: number;
  maxLength?: number;
  checksum?: MsiChecksumType;

  constructor(config: Partial<MSIBarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class Code39BarcodeConfig {
  enabled?: boolean;
  minLength?: number;
  maxLength?: number;
  checksum?: Code39ChecksumType;

  constructor(config: Partial<Code39BarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class Code11BarcodeConfig {
  enabled?: boolean;
  minLength?: number;
  maxLength?: number;
  checksum?: Code11ChecksumType;

  constructor(config: Partial<Code11BarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class DatamatrixBarcodeConfig {
  enabled?: boolean;
  dpmMode?: number;
  minLength?: number;
  maxLength?: number;

  constructor(config: Partial<DatamatrixBarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class GeneralSettings {
  threadsLimit?: number;
  decodingSpeed?: DecodingSpeed;
  roiX?: number;
  roiY?: number;
  roiWidth?: number;
  roiHeight?: number;
  formattingType?: FormattingType;
  encodingCharacterSet?: string;
  maximumResultsCount?: number;
  duplicatesDelayMs?: number;
  multicodeCachingDuration?: number;
  multicodeCachingEnabled?: boolean;
  upcEanDeblur?: number;
  enableMisshaped1D?: number;

  constructor(config: Partial<GeneralSettings>) {
    Object.assign(this, config);
  }

  setROI(x: number, y: number, width: number, height: number): void {
    this.roiX = x;
    this.roiY = y;
    this.roiWidth = width;
    this.roiHeight = height;
  }
}
