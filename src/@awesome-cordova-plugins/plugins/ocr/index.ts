import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export enum OCRSourceType {
  /**
   * Normal processing from a file URL. This is the overall recommended choice
   * for most applications. The distinction between file and native URLs is
   * only relevant on iOS; under Android `NORMFILEURL` and `NORMNATIVEURL`
   * are interchangeable.
   */
  NORMFILEURL = 0,

  /**
   * Normal processing from a native URL. Since this source type uses deprecated
   * OS APIs to interact with the camera plugin, it is best avoided, especially
   * if ongoing forward compatibility is a concern. For further information, see
   * https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr#plugin-usage
   * Under Android, this is equivalent to `NORMFILEURL`.
   */
  NORMNATIVEURL = 1,

  /**
   * Fast processing from a file URL. As the compression done internally causes
   * a significant loss in extraction quality, it should only be preferred when
   * dealing with large images containing significant amounts of text, where
   * the execution time required to perform normal processing is prohibitive.
   * The distinction between file and native URLs is only relevant on iOS;
   * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
   */
  FASTFILEURL = 2,

  /**
   * Fast processing from a native URL. See comments above for `FASTFILEURL`
   * concerning quality loss.
   *
   * The distinction between file and native URLs is only relevant on iOS;
   * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
   */
  FASTNATIVEURL = 3,

  /**
   * Normal processing from a base64-encoded string. Quality is equivalent
   * to `NORMFILEURL`, but due to significantly higher memory requirements,
   * is only appropriate for use with very small images.
   */
  BASE64 = 4,
}

/**
 * Four points (ordered in clockwise direction) that enclose a text
 * component. May not be axis-aligned due to perspective skew.
 */
export interface OCRCorners {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
  x4: number;
  y4: number;
}

/**
 * An axis-aligned bounding rectangle. `x` and `y` represent the top left.
 */
export interface OCRRect {
  x: number;
  y: number;
  height: number;
  width: number;
}

/**
 * This is the return value from the `recText` method.
 */
export interface OCRResult {
  /**
   * Was any text extracted? If `foundText` is false, no other fields are
   * returned. If foundText is true, all other fields are reliable.
   */
  foundText: boolean;

  /**
   * A block is the largest unit of text, which can be thought of as a paragraph.
   * This field consists of several parallel arrays, so the text in `blocktext[0]`
   * is bounded by `blockpoints[0]` and `blockframe[0]`.
   */
  blocks: {
    blocktext: string[];
    blockpoints: OCRCorners[];
    blockframe: OCRRect[];
  };

  /**
   * A line is the central unit of text, containing several elements. A block
   * can contain N lines. This field consists of several parallel arrays, so the
   * text in `linetext[0]` is bounded by `linepoints[0]` and `lineframe[0]`.
   */
  lines: {
    linetext: string[];
    linepoints: OCRCorners[];
    lineframe: OCRRect[];
  };

  /**
   * A word (or element) is the smallest unit of text. This field consists of
   * several parallel arrays, so the text in `wordtext[0]` is bounded by
   * `wordpoints[0]` and `wordframe[0]`.
   */
  words: {
    wordtext: string[];
    wordpoints: OCRCorners[];
    wordframe: OCRRect[];
  };
}

/**
 * @name OCR
 * @description
 * This plugin attempts to identify and extract text from an image.
 * Please note: This plugin depends on the GoogleMobileVision pod which is referencing UIWebview, that has been deprecated by Apple.
 * Don't use this plugin in an app intended for App Store as you will get a review rejection from Apple: `Deprecated API Usage — Apple will stop accepting submissions of apps that use UIWebView APIs`
 * For more info, please see the following Github issue [Google Mobile Vision relying on deprecated UIWebview](https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr/issues/27).
 * @usage
 * ```typescript
 * import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';
 *
 *
 * constructor(private ocr: OCR) { }
 *
 * ...
 *
 * this.ocr.recText(OCRSourceType.NORMFILEURL, "file://path/to/image.png")
 *   .then((res: OCRResult) => console.log(JSON.stringify(res)))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * OCRCorners
 * OCRRect
 * OCRResult
 * @enums
 * OCRSourceType
 */
@Plugin({
  pluginName: 'OCR',
  plugin: 'cordova-plugin-mobile-ocr',
  pluginRef: 'textocr',
  repo: 'https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OCR extends AwesomeCordovaNativePlugin {
  /**
   * Extract text from image
   *
   * @param sourceType {OCRSourceType} type of image source
   * @param source {string} image source (either file URL or base64 string)
   * @returns {Promise<OCRResult>} extracted text and geometry
   */
  @Cordova()
  recText(sourceType: OCRSourceType, source: string): Promise<OCRResult> {
    return;
  }
}
