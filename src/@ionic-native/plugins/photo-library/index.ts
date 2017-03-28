import { Plugin, Cordova, CordovaFiniteObservable } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

/**
 * @name Photo Library
 * @description
 * The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.
 * Saving photos and videos to the library is also supported.
 * cdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how.
 *
 * @usage
 * ```
 * import { PhotoLibrary } from '@ionic-native/photo-library';
 *
 * constructor(private photoLibrary: PhotoLibrary) { }
 *
 * this.photoLibrary.requestAuthorization().then(() => {
 *   this.photoLibrary.getLibrary().subscribe({
 *     next: library => {
 *       library.forEach(function(libraryItem) {
 *         console.log(libraryItem.id);          // ID of the photo
 *         console.log(libraryItem.photoURL);    // Cross-platform access to photo
 *         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
 *         console.log(libraryItem.fileName);
 *         console.log(libraryItem.width);
 *         console.log(libraryItem.height);
 *         console.log(libraryItem.creationDate);
 *         console.log(libraryItem.latitude);
 *         console.log(libraryItem.longitude);
 *         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
 *       });
 *     },
 *     error: err => {},
 *     complete: () => { console.log("could not get photos"); }
 *   });
 * })
 * .catch(err => console.log("permissions weren't granted"));
 *
 * ```
 */
@Plugin({
  pluginName: 'PhotoLibrary',
  plugin: 'cordova-plugin-photo-library',
  pluginRef: 'cordova.plugins.photoLibrary',
  repo: 'https://github.com/terikon/cordova-plugin-photo-library',
  install: 'ionic plugin add cordova-plugin-photo-library --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="To choose photos"',
  platforms: ['Android', 'Browser', 'iOS']
})
@Injectable()
export class PhotoLibrary {

  /**
   * Retrieves library items. Library item contains photo metadata like width and height, as well as photoURL and thumbnailURL.
   * @param options {GetLibraryOptions} Optional, like thumbnail size and chunks settings.
   * @return {Observable<LibraryItem[]>} Returns library items. If appropriate option was set, will be returned by chunks.
   */
  @CordovaFiniteObservable({
    callbackOrder: 'reverse',
    resultFinalPredicate: (result: {isLastChunk: boolean}) => { return result.isLastChunk; },
    resultTransform: (result: {library: LibraryItem[]}) => { return result.library; },
  })
  getLibrary(options?: GetLibraryOptions): Observable<LibraryItem[]> { return; }

  /**
   * Asks user permission to access photo library.
   * @param options {RequestAuthorizationOptions} Optional, like whether only read access needed or read/write.
   * @return { Promise<void>} Returns a promise that resolves when permissions are granted, and fails when not.
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  requestAuthorization(options?: RequestAuthorizationOptions): Promise<void> { return; }

  /**
   * Returns list of photo albums on device.
   * @return {Promise<AlbumItem[]>} Resolves to list of albums.
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  getAlbums(): Promise<AlbumItem[]> { return; }

  /**
   * Provides means to request URL of thumbnail, with specified size or quality.
   * @param photo {string | LibraryItem} Id of photo, or LibraryItem.
   * @param options {GetThumbnailOptions} Options, like thumbnail size or quality.
   * @return {Promise<string>} Resolves to URL of cdvphotolibrary schema.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  getThumbnailURL(photo: string | LibraryItem, options?: GetThumbnailOptions): Promise<string> { return; }

  /**
   * Provides means to request photo URL by id.
   * @param photo {string | LibraryItem} Id or LibraryItem.
   * @param options {GetPhotoOptions} Optional options.
   * @return {Promise<string>} Resolves to URL of cdvphotolibrary schema.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  getPhotoURL(photo: string | LibraryItem, options?: any): Promise<string> { return; }

  /**
   * Returns thumbnail as Blob.
   * @param photo {string | LibraryItem} Id or LibraryItem.
   * @param options {GetThumbnailOptions} Options, like thumbnail size or quality.
   * @return {Promise<Blob>} Resolves requested thumbnail as blob.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  getThumbnail(photo: string | LibraryItem, options?: GetThumbnailOptions): Promise<Blob> { return; }

  /**
   * Returns photo as Blob.
   * @param photo {string | LibraryItem} Id or LibraryItem.
   * @param options {GetPhotoOptions} Optional options.
   * @return {Promise<Blob>} Resolves requested photo as blob.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  getPhoto(photo: string | LibraryItem, options?: any): Promise<Blob> { return; }

  /**
   * Saves image to specified album. Album will be created if not exists.
   * LibraryItem that represents saved image is returned.
   * @param url {string} URL of a file, or DataURL.
   * @param album {AlbumItem | string} Name of an album or AlbumItem object.
   * @param options {GetThumbnailOptions} Options, like thumbnail size for resulting LibraryItem.
   * @return {Promise<LibraryItem>} Resolves to LibraryItem that represents saved image.
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  saveImage(url: string, album: AlbumItem | string, options?: GetThumbnailOptions): Promise<LibraryItem> { return; }

  /**
   * Saves video to specified album. Album will be created if not exists.
   * @param url {string} URL of a file, or DataURL.
   * @param album {AlbumItem | string} Name of an album or AlbumItem object.
   * @return {Promise<void>} Resolves when save operation completes.
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  saveVideo(url: string, album: AlbumItem | string): Promise<void> { return; }

}

/**
 * @hidden
 */
export interface LibraryItem {
  /**
   * Local id of the photo
   */
  id: string;
  /**
   * URL of cdvphotolibrary schema.
   */
  photoURL: string;
  /**
   * URL of cdvphotolibrary schema.
   */
  thumbnailURL: string;
  fileName: string;
  width: number;
  height: number;
  creationDate: Date;
  latitude?: number;
  longitude?: number;
  albumIds?: string[];
}

/**
 * @hidden
 */
export interface AlbumItem {
  /**
   * Local id of the album
   */
  id: string;
  title: string;
}

/**
 * @hidden
 */
export interface GetLibraryOptions {
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  quality?: number;
  itemsInChunk?: number;
  chunkTimeSec?: number;
  useOriginalFileNames?: boolean;
  includeAlbumData?: boolean;
}

/**
 * @hidden
 */
export interface RequestAuthorizationOptions {
  read?: boolean;
  write?: boolean;
}

/**
 * @hidden
 */
export interface GetThumbnailOptions {
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  quality?: number;
}
