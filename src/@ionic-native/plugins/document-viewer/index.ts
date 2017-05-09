import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name document-viewer
 * @description
 * This plugin offers a slim API to view PDF files which are either stored in the apps assets folder (/www/*) or in any other file system directory available via the cordova file plugin.
 *
 * @usage
 * ```typescript
 * import { DocumentViewer } from '@ionic-native/document-viewer';
 *
 *
 * constructor(private document-viewer: DocumentViewer) { }
 *
 * ...
 *
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'Document Viewer',
  plugin: 'cordova-plugin-document-viewer',
  pluginRef: 'SitewaertsDocumentViewer',
  repo: 'DocumentViewer',
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class DocumentViewer extends IonicNativePlugin {

  @Cordova()
  getSupportInfo(): Promise<any> { return; }

  @Cordova()
  canViewDocument(url: string, contentType: string, options: any): Promise<any> { return; }

  @Cordova()
  viewDocument(url: string, contentType: string, options: any): Promise<any> { return; }

}
