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

  /**
   * Freezes the current AR scanning session by capturing a still image from the camera feed.
   * Use only when AR mode is enabled to temporarily freeze the view while keeping overlays visible.
   */
  @Cordova()
  freezeScanning(): Promise<any> {
    return;
  }

  /**
   * Unfreezes the AR scanning session by removing the still image and reactivating the camera and overlays.
   * Use only when AR mode is enabled to restore the live AR view and continue scanning.
   */
  @Cordova()
  unfreezeScanning(): Promise<any> {
    return;
  }

  /**
   * Captures the latest camera frame
   */
  @Cordova()
  captureImage(): Promise<any> {
    return;
  }

  /**
   * Scan barcodes from base64 string image
   */
  @Cordova()
  scanImage(base64: string): Promise<any> {
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

  /**
   * @deprecated Removed upstream in barkoder-cordova 1.6.4. Use `setThresholdBetweenDuplicatesScans` instead.
   */
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

  // Native bridge exposes this as `setDatamatrixDpmModeEnabled` (lowercase "m"); methodName keeps this call working.
  @Cordova({ methodName: 'setDatamatrixDpmModeEnabled' })
  setDataMatrixDpmModeEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets whether the Direct Part Marking (DPM) mode for QR barcodes is enabled
   */
  @Cordova()
  setQrDpmModeEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets whether the Direct Part Marking (DPM) mode for QR Micro barcodes is enabled
   */
  @Cordova()
  setQrMicroDpmModeEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets whether the QR multi-part merge is enabled
   */
  @Cordova()
  setQrMultiPartMergeEnabled(enabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  configureBarkoder(barkoderConfig: BarkoderConfig): Promise<any> {
    return;
  }

  /**
   * Sets whether Master checksum should be required when scanning ID Documents
   */
  @Cordova()
  setIdDocumentMasterChecksumEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets whether UPC-E barcodes should be expanded to UPC-A format
   */
  @Cordova()
  setUPCEexpandToUPCA(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets whether UPC-E1 barcodes should be expanded to UPC-A format
   */
  @Cordova()
  setUPCE1expandToUPCA(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets the color of the scanning indicator line on the camera feed
   */
  @Cordova()
  setScanningIndicatorColor(hexColor: string): Promise<any> {
    return;
  }

  /**
   * Sets the width of the scanning indicator line on the camera feed
   */
  @Cordova()
  setScanningIndicatorWidth(lineWidth: number): Promise<any> {
    return;
  }

  /**
   * Sets the animation of the scanning indicator on the camera feed
   */
  @Cordova()
  setScanningIndicatorAnimation(animation: number): Promise<any> {
    return;
  }

  /**
   * Sets the scanning indicator to always be shown on the camera feed
   */
  @Cordova()
  setScanningIndicatorAlwaysVisible(value: boolean): Promise<any> {
    return;
  }

  /**
   * Sets a custom option
   */
  @Cordova()
  setCustomOption(option: string, value: number): Promise<any> {
    return;
  }

  /**
   * Sets a custom option globally (must be called before creating the Barkoder config)
   */
  @Cordova()
  setCustomOptionGlobal(option: number, value: number): Promise<any> {
    return;
  }

  /**
   * Sets the camera's exposure dynamically based on the provided intensity, cycling through predefined compensation values
   */
  @Cordova()
  setDynamicExposure(intensity: number): Promise<any> {
    return;
  }

  /**
   * Sets the camera to use the center of the viewfinder for focus and exposure
   */
  @Cordova()
  setCentricFocusAndExposure(value: boolean): Promise<any> {
    return;
  }

  /**
   * Sets whether Composite Mode should be enabled when scanning
   */
  @Cordova()
  setEnableComposite(value: number): Promise<any> {
    return;
  }

  /**
   * Enables or disables video stabilization for smoother video capture
   */
  @Cordova()
  setVideoStabilization(value: boolean): Promise<any> {
    return;
  }

  /**
   * Sets the camera to be used for scanning (back/front)
   */
  @Cordova()
  setCamera(value: BarkoderCameraPosition): Promise<any> {
    return;
  }

  /**
   * Enables or disables showing duplicate barcode locations on the preview overlay
   */
  @Cordova()
  setShowDuplicatesLocations(value: boolean): Promise<any> {
    return;
  }

  /**
   * Sets the AR mode used for barcode scanning visualization
   */
  @Cordova()
  setARMode(value: BarkoderARMode): Promise<any> {
    return;
  }

  /**
   * Sets the delay after which a detected AR result is considered expired
   */
  @Cordova()
  setARResultDisappearanceDelayMs(value: number): Promise<any> {
    return;
  }

  /**
   * Sets the speed of overlay transition for AR barcode locations
   */
  @Cordova()
  setARLocationTransitionSpeed(value: number): Promise<any> {
    return;
  }

  /**
   * Sets the refresh mode for the AR overlay
   */
  @Cordova()
  setAROverlayRefresh(value: BarkoderAROverlayRefresh): Promise<any> {
    return;
  }

  /**
   * Sets the overlay color for selected barcodes in AR mode
   */
  @Cordova()
  setARSelectedLocationColor(value: string): Promise<any> {
    return;
  }

  /**
   * Sets the overlay color for non-selected barcodes in AR mode
   */
  @Cordova()
  setARNonSelectedLocationColor(value: string): Promise<any> {
    return;
  }

  /**
   * Sets line width for selected barcode overlay in AR mode
   */
  @Cordova()
  setARSelectedLocationLineWidth(value: number): Promise<any> {
    return;
  }

  /**
   * Sets line width for non-selected barcode overlay in AR mode
   */
  @Cordova()
  setARNonSelectedLocationLineWidth(value: number): Promise<any> {
    return;
  }

  /**
   * Sets AR location style (tight, bounding box, none)
   */
  @Cordova()
  setARLocationType(value: BarkoderARLocationType): Promise<any> {
    return;
  }

  /**
   * Enables or disables double-tap to freeze scanning in AR mode
   */
  @Cordova()
  setARDoubleTapToFreezeEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Enables or disables the capturing and processing of image data when a barcode is selected for AR mode
   */
  @Cordova()
  setARImageResultEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Enables or disables the barcode thumbnail on result for AR mode
   */
  @Cordova()
  setARBarcodeThumbnailOnResultEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets the maximum number of results allowed in a single AR scanning session
   */
  @Cordova()
  setARResultLimit(value: number): Promise<any> {
    return;
  }

  /**
   * Sets whether scanning continues when the result limit is reached (only in `.interactiveDisabled` mode)
   */
  @Cordova()
  setARContinueScanningOnLimit(value: boolean): Promise<any> {
    return;
  }

  /**
   * Sets whether results are emitted only at AR session end (or when the limit is reached)
   */
  @Cordova()
  setAREmitResultsAtSessionEndOnly(value: boolean): Promise<any> {
    return;
  }

  /**
   * Sets height of header label above barcode in AR mode
   */
  @Cordova()
  setARHeaderHeight(value: number): Promise<any> {
    return;
  }

  /**
   * Sets header visibility condition (always, on selected, never)
   */
  @Cordova()
  setARHeaderShowMode(value: BarkoderARHeaderShowMode): Promise<any> {
    return;
  }

  /**
   * Sets max text height for AR header
   */
  @Cordova()
  setARHeaderMaxTextHeight(value: number): Promise<any> {
    return;
  }

  /**
   * Sets min text height for AR header
   */
  @Cordova()
  setARHeaderMinTextHeight(value: number): Promise<any> {
    return;
  }

  /**
   * Sets text color for selected barcode header
   */
  @Cordova()
  setARHeaderTextColorSelected(value: string): Promise<any> {
    return;
  }

  /**
   * Sets text color for non-selected barcode header
   */
  @Cordova()
  setARHeaderTextColorNonSelected(value: string): Promise<any> {
    return;
  }

  /**
   * Sets the horizontal margin applied to the header text in AR mode, creating equal padding on both sides
   */
  @Cordova()
  setARHeaderHorizontalTextMargin(value: number): Promise<any> {
    return;
  }

  /**
   * Sets the vertical margin applied to the header text in AR mode, creating equal padding on both sides
   */
  @Cordova()
  setARHeaderVerticalTextMargin(value: number): Promise<any> {
    return;
  }

  /**
   * Sets AR header text format using placeholders (e.g. [barcode_text])
   */
  @Cordova()
  setARHeaderTextFormat(value: string): Promise<any> {
    return;
  }

  /**
   * Configures the close button
   */
  @Cordova()
  configureCloseButton(
    visible: boolean,
    positionX: number,
    positionY: number,
    iconSize: number,
    tintColor: string,
    backgroundColor: string,
    cornerRadius: number,
    padding: number,
    useCustomIcon: boolean,
    customIcon: string
  ): Promise<any> {
    return;
  }

  /**
   * Configures the flash (torch) button. Auto-hides if torch is unavailable
   */
  @Cordova()
  configureFlashButton(
    visible: boolean,
    positionX: number,
    positionY: number,
    iconSize: number,
    tintColor: string,
    backgroundColor: string,
    cornerRadius: number,
    padding: number,
    useCustomIcon: boolean,
    customIconFlashOn: string,
    customIconFlashOff: string
  ): Promise<any> {
    return;
  }

  /**
   * Configures the zoom button
   */
  @Cordova()
  configureZoomButton(
    visible: boolean,
    positionX: number,
    positionY: number,
    iconSize: number,
    tintColor: string,
    backgroundColor: string,
    cornerRadius: number,
    padding: number,
    useCustomIcon: boolean,
    customIconZoomedIn: string,
    customIconZoomedOut: string,
    zoomedInFactor: number,
    zoomedOutFactor: number
  ): Promise<any> {
    return;
  }

  /**
   * Selects all barcodes that are currently visible in AR mode
   */
  @Cordova()
  selectVisibleBarcodes(): Promise<any> {
    return;
  }

  /**
   * Power saving mode level. Higher values reduce CPU/battery usage by limiting frame processing. 0 = disabled (no constraints)
   */
  @Cordova()
  setPowerSavingMode(powerSavingMode: number): Promise<any> {
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

  /**
   * Retrieves the version of the Barkoder library
   */
  @Cordova()
  getLibVersion(): Promise<string> {
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

  /**
   * Retrieves the current zoom factor for the device's camera
   */
  @Cordova()
  getCurrentZoomFactor(): Promise<number> {
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

  /**
   * @deprecated Removed upstream in barkoder-cordova 1.6.4. Use `getThresholdBetweenDuplicatesScans` instead.
   */
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

  /**
   * Retrieves whether Direct Part Marking (DPM) mode for Datamatrix barcodes is enabled
   */
  @Cordova()
  isDatamatrixDpmModeEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves whether Direct Part Marking (DPM) mode for QR barcodes is enabled
   */
  @Cordova()
  isQrDpmModeEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves whether Direct Part Marking (DPM) mode for QR Micro barcodes is enabled
   */
  @Cordova()
  isQrMicroDpmModeEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves whether QR multi-part merge is enabled
   */
  @Cordova()
  isQrMultiPartMergeEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves whether Master checksum is enabled when scanning ID Documents
   */
  @Cordova()
  isIdDocumentMasterChecksumEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves the hexadecimal color code representing the line color of the scanning indicator on the camera preview
   */
  @Cordova()
  getScanningIndicatorColorHex(): Promise<string> {
    return;
  }

  /**
   * Retrieves the current width setting for the scanning indicator on the camera preview
   */
  @Cordova()
  getScanningIndicatorWidth(): Promise<number> {
    return;
  }

  /**
   * Retrieves the current animation setting for the scanning indicator on the camera preview
   */
  @Cordova()
  getScanningIndicatorAnimation(): Promise<any> {
    return;
  }

  /**
   * Retrieves whether the scanning indicator is always visible on the camera preview
   */
  @Cordova()
  isScanningIndicatorAlwaysVisible(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves whether showing duplicate barcode locations in the AR view is enabled
   */
  @Cordova()
  getShowDuplicatesLocations(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves the current AR mode used for barcode scanning
   */
  @Cordova()
  getARMode(): Promise<BarkoderARMode> {
    return;
  }

  /**
   * Retrieves the delay after which AR results disappear once detected
   */
  @Cordova()
  getARResultDisappearanceDelayMs(): Promise<number> {
    return;
  }

  /**
   * Retrieves the transition speed for AR barcode location overlays
   */
  @Cordova()
  getARLocationTransitionSpeed(): Promise<number> {
    return;
  }

  /**
   * Retrieves the AR overlay refresh mode
   */
  @Cordova()
  getAROverlayRefresh(): Promise<BarkoderAROverlayRefresh> {
    return;
  }

  /**
   * Retrieves the color used for selected barcode overlays in AR mode
   */
  @Cordova()
  getARSelectedLocationColor(): Promise<string> {
    return;
  }

  /**
   * Retrieves the color used for non-selected barcode overlays in AR mode
   */
  @Cordova()
  getARNonSelectedLocationColor(): Promise<string> {
    return;
  }

  /**
   * Retrieves the line width for selected barcode overlays in AR mode
   */
  @Cordova()
  getARSelectedLocationLineWidth(): Promise<number> {
    return;
  }

  /**
   * Retrieves the line width for non-selected barcode overlays in AR mode
   */
  @Cordova()
  getARNonSelectedLocationLineWidth(): Promise<number> {
    return;
  }

  /**
   * Retrieves the style of AR location overlays (tight, bounding box, none)
   */
  @Cordova()
  getARLocationType(): Promise<BarkoderARLocationType> {
    return;
  }

  /**
   * Checks whether double-tap to freeze is enabled in AR mode
   */
  @Cordova()
  isARDoubleTapToFreezeEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves whether image result is enabled for AR mode
   */
  @Cordova()
  isARImageResultEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves whether barcode thumbnail on result is enabled for AR mode
   */
  @Cordova()
  isARBarcodeThumbnailOnResultEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves the maximum number of results allowed in a single AR scanning session
   */
  @Cordova()
  getARResultLimit(): Promise<number> {
    return;
  }

  /**
   * Retrieves whether scanning continues when the result limit is reached (only in `.interactiveDisabled` mode)
   */
  @Cordova()
  getARContinueScanningOnLimit(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves whether results are emitted only at AR session end (or when the limit is reached)
   */
  @Cordova()
  getAREmitResultsAtSessionEndOnly(): Promise<boolean> {
    return;
  }

  /**
   * Retrieves the header height above barcode in AR mode
   */
  @Cordova()
  getARHeaderHeight(): Promise<number> {
    return;
  }

  /**
   * Retrieves the header display mode (always, on selected, never)
   */
  @Cordova()
  getARHeaderShowMode(): Promise<BarkoderARHeaderShowMode> {
    return;
  }

  /**
   * Retrieves the maximum text height for AR headers
   */
  @Cordova()
  getARHeaderMaxTextHeight(): Promise<number> {
    return;
  }

  /**
   * Retrieves the minimum text height for AR headers
   */
  @Cordova()
  getARHeaderMinTextHeight(): Promise<number> {
    return;
  }

  /**
   * Retrieves the header text color for selected barcodes
   */
  @Cordova()
  getARHeaderTextColorSelected(): Promise<string> {
    return;
  }

  /**
   * Retrieves the header text color for non-selected barcodes
   */
  @Cordova()
  getARHeaderTextColorNonSelected(): Promise<string> {
    return;
  }

  /**
   * Retrieves the horizontal margin for AR header text
   */
  @Cordova()
  getARHeaderHorizontalTextMargin(): Promise<number> {
    return;
  }

  /**
   * Retrieves the vertical margin for AR header text
   */
  @Cordova()
  getARHeaderVerticalTextMargin(): Promise<number> {
    return;
  }

  /**
   * Retrieves the format string used for AR header text
   */
  @Cordova()
  getARHeaderTextFormat(): Promise<string> {
    return;
  }

  /**
   * Retrieves the power saving mode level
   */
  @Cordova()
  getPowerSavingMode(): Promise<number> {
    return;
  }
}

export enum DecodingSpeed {
  fast,
  normal,
  slow,
  rigorous,
}

export enum FormattingType {
  disabled,
  automatic,
  gs1,
  aamva,
  sadl,
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

/**
 * `normal`/`high` are the original member names from this wrapper; `HD`/`FHD`/`UHD` are the
 * current upstream names (same underlying values) as of barkoder-cordova 1.6.8, plus the new `UHD` level.
 */
/* eslint-disable @typescript-eslint/no-duplicate-enum-values -- HD/FHD intentionally alias normal/high for backwards compatibility */
export enum BarkoderResolution {
  normal = 0,
  high = 1,
  HD = 0,
  FHD = 1,
  UHD = 2,
}
/* eslint-enable @typescript-eslint/no-duplicate-enum-values */

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
  idDocument,
  databar14,
  databarLimited,
  databarExpanded,
  postalIMB,
  postnet,
  planet,
  australianPost,
  royalMail,
  kix,
  japanesePost,
  maxiCode,
  ocrText,
}

export enum BarkoderCameraPosition {
  BACK,
  FRONT,
}

export enum BarkoderARMode {
  off,
  interactiveDisabled,
  interactiveEnabled,
  nonInteractive,
}

export enum BarkoderAROverlayRefresh {
  smooth,
  normal,
}

export enum BarkoderARLocationType {
  none,
  tight,
  boundingBox,
}

export enum BarkoderARHeaderShowMode {
  never,
  always,
  onSelected,
}

export enum IdDocumentMasterChecksumType {
  disabled,
  enabled,
}

export class BarkoderConfig {
  locationLineColor?: string;
  locationLineWidth?: number;
  roiLineColor?: string;
  roiLineWidth?: number;
  roiOverlayBackgroundColor?: string;
  scanningIndicatorColor?: string;
  scanningIndicatorWidth?: number;
  scanningIndicatorAnimation?: number;
  scanningIndicatorAlwaysVisible?: boolean;
  closeSessionOnResultEnabled?: boolean;
  imageResultEnabled?: boolean;
  locationInImageResultEnabled?: boolean;
  locationInPreviewEnabled?: boolean;
  pinchToZoomEnabled?: boolean;
  regionOfInterestVisible?: boolean;
  barkoderResolution?: BarkoderResolution;
  powerSavingMode?: number;
  beepOnSuccessEnabled?: boolean;
  vibrateOnSuccessEnabled?: boolean;
  decoder?: DekoderConfig;
  arConfig?: BarkoderARConfig;

  constructor(config: Partial<BarkoderConfig>) {
    Object.assign(this, config);
  }
}

export class DekoderConfig {
  aztec?: BarcodeConfig;
  aztecCompact?: BarcodeConfig;
  qr?: QRBarcodeConfig;
  qrMicro?: DatamatrixBarcodeConfig;
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
  idDocument?: IdDocumentBarcodeConfig;
  databar14?: BarcodeConfig;
  databarLimited?: BarcodeConfig;
  databarExpanded?: BarcodeConfig;
  postalIMB?: BarcodeConfig;
  postnet?: BarcodeConfig;
  planet?: BarcodeConfig;
  australianPost?: BarcodeConfig;
  royalMail?: BarcodeConfig;
  kix?: BarcodeConfig;
  japanesePost?: BarcodeConfig;
  maxiCode?: BarcodeConfig;
  ocrText?: BarcodeConfig;
  general?: GeneralSettings;

  constructor(config: Partial<DekoderConfig>) {
    Object.assign(this, config);
  }
}

export class BarkoderARConfig {
  arMode?: BarkoderARMode;
  resultDisappearanceDelayMs?: number;
  locationTransitionSpeed?: number;
  overlayRefresh?: BarkoderAROverlayRefresh;
  selectedLocationColor?: string;
  nonSelectedLocationColor?: string;
  selectedLocationLineWidth?: number;
  nonSelectedLocationLineWidth?: number;
  locationType?: BarkoderARLocationType;
  doubleTapToFreezeEnabled?: boolean;
  imageResultEnabled?: boolean;
  barcodeThumbnailOnResult?: boolean;
  resultLimit?: number;
  continueScanningOnLimit?: boolean;
  emitResultsAtSessionEndOnly?: boolean;
  headerHeight?: number;
  headerShowMode?: BarkoderARHeaderShowMode;
  headerMaxTextHeight?: number;
  headerMinTextHeight?: number;
  headerTextColorSelected?: string;
  headerTextColorNonSelected?: string;
  headerHorizontalTextMargin?: number;
  headerVerticalTextMargin?: number;
  headerTextFormat?: string;

  constructor(config: Partial<BarkoderARConfig>) {
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

export class QRBarcodeConfig {
  enabled?: boolean;
  dpmMode?: number;
  multiPartMerge?: boolean;
  minLength?: number;
  maxLength?: number;

  constructor(config: Partial<QRBarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class IdDocumentBarcodeConfig {
  enabled?: boolean;
  masterChecksum?: IdDocumentMasterChecksumType;

  constructor(config: Partial<IdDocumentBarcodeConfig>) {
    Object.assign(this, config);
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
  /**
   * @deprecated Removed upstream in barkoder-cordova 1.6.4. Use the `setThresholdBetweenDuplicatesScans`/`getThresholdBetweenDuplicatesScans` methods instead.
   */
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

export class BarkoderResult {
  decoderResults: DecoderResult[];
  resultThumbnailsAsBase64?: string[] | null;
  resultImageAsBase64?: string | null;

  constructor(resultMap: Record<string, any>) {
    if (Array.isArray(resultMap['decoderResults'])) {
      this.decoderResults = resultMap['decoderResults'].map((result: any) => new DecoderResult(result));
    } else {
      this.decoderResults = [];
    }

    this.resultThumbnailsAsBase64 = Array.isArray(resultMap['resultThumbnailsAsBase64'])
      ? resultMap['resultThumbnailsAsBase64']
          .map((thumbnail) => this.convertToBase64(thumbnail))
          .filter((thumbnail): thumbnail is string => thumbnail !== null)
      : null;

    this.resultImageAsBase64 = this.convertToBase64(resultMap['resultImageAsBase64']);
  }

  private convertToBase64(data: string | null | undefined): string | null {
    return data ? `data:image/jpeg;base64,${data}` : null;
  }
}

export class DecoderResult {
  barcodeType: number;
  barcodeTypeName: string;
  binaryDataAsBase64: string;
  textualData: string;
  characterSet?: string | null;
  extra?: Record<string, any> | null;
  mrzImagesAsBase64?: { name: string; base64: string }[];
  sadlImageAsBase64?: string | null;
  locationPoints?: { x: number; y: number }[];

  constructor(resultMap: Record<string, any>) {
    this.barcodeType = resultMap['barcodeType'];
    this.barcodeTypeName = resultMap['barcodeTypeName'];
    this.binaryDataAsBase64 = resultMap['binaryDataAsBase64'];
    this.textualData = resultMap['textualData'];
    this.characterSet = resultMap['characterSet'] || null;
    this.extra = 'extra' in resultMap ? JSON.parse(resultMap['extra']) : null;
    this.mrzImagesAsBase64 = Array.isArray(resultMap['mrzImagesAsBase64'])
      ? resultMap['mrzImagesAsBase64'].map((image: { name: string; base64: string }) => ({
          name: image.name,
          base64: `data:image/jpeg;base64,${image.base64}`,
        }))
      : [];
    this.sadlImageAsBase64 = this.convertToBase64(resultMap['sadlImageAsBase64']);
    this.locationPoints = Array.isArray(resultMap['locationPoints']) ? resultMap['locationPoints'] : undefined;
  }

  private convertToBase64(data: string | null | undefined): string | null {
    return data ? `data:image/jpeg;base64,${data}` : null;
  }
}
