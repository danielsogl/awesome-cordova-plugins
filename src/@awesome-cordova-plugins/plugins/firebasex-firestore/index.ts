import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export type FirestoreFilter = [string, ...any[]];

export interface FirestoreListenerIdEvent {
  eventType: 'id';
  id: string;
}

export interface FirestoreDocumentChangeEvent {
  eventType: 'change';
  snapshot: any;
  source: 'local' | 'remote';
  fromCache: boolean;
}

export interface FirestoreCollectionChangeEvent {
  eventType: 'change';
  documents: Record<
    string,
    { type: 'new' | 'modified' | 'removed'; snapshot: any; source: 'local' | 'remote'; fromCache: boolean }
  >;
}

/**
 * @name FirebasexFirestore
 * @description
 * Cordova plugin for Cloud Firestore - part of the modular cordova-plugin-firebasex family.
 * @usage
 * ```typescript
 * import { FirebasexFirestore } from '@awesome-cordova-plugins/firebasex-firestore/ngx';
 *
 * constructor(private firebasexFirestore: FirebasexFirestore) { }
 *
 * ...
 *
 * this.firebasexFirestore.fetchDocumentInFirestoreCollection('doc1', 'my-collection').then((doc) => console.log(doc));
 * ```
 */
@Plugin({
  pluginName: 'FirebasexFirestore',
  plugin: 'cordova-plugin-firebasex-firestore',
  pluginRef: 'FirebasexFirestore',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex-firestore',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebasexFirestore extends AwesomeCordovaNativePlugin {
  /**
   * Adds a new document with an auto-generated ID to a Firestore collection.
   *
   * @param {Object} document - the document data to add (must be a plain object, not an array)
   * @param {string} collection - the Firestore collection path
   * @param {boolean} [timestamp] - if true, adds created and lastUpdate Firestore Timestamp fields automatically
   * @returns {Promise<string>} the auto-generated document ID
   */
  @Cordova()
  addDocumentToFirestoreCollection(
    document: Record<string, any>,
    collection: string,
    timestamp?: boolean
  ): Promise<string> {
    return;
  }

  /**
   * Creates or overwrites a document with a specific ID in a Firestore collection.
   *
   * @param {string | number} documentId - the document identifier
   * @param {Object} document - the document data
   * @param {string} collection - the Firestore collection path
   * @param {boolean} [timestamp] - if true, adds a lastUpdate Timestamp field
   * @returns {Promise<any>}
   */
  @Cordova()
  setDocumentInFirestoreCollection(
    documentId: string | number,
    document: Record<string, any>,
    collection: string,
    timestamp?: boolean
  ): Promise<any> {
    return;
  }

  /**
   * Updates specific fields of an existing document in a Firestore collection. Fails if the document does not exist.
   *
   * @param {string | number} documentId - the document identifier
   * @param {Object} document - the fields to update
   * @param {string} collection - the Firestore collection path
   * @param {boolean} [timestamp] - if true, updates the lastUpdate Timestamp field
   * @returns {Promise<any>}
   */
  @Cordova()
  updateDocumentInFirestoreCollection(
    documentId: string | number,
    document: Record<string, any>,
    collection: string,
    timestamp?: boolean
  ): Promise<any> {
    return;
  }

  /**
   * Deletes a document from a Firestore collection.
   *
   * @param {string | number} documentId - the document identifier
   * @param {string} collection - the Firestore collection path
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteDocumentFromFirestoreCollection(documentId: string | number, collection: string): Promise<any> {
    return;
  }

  /**
   * Checks whether a document exists in a Firestore collection.
   *
   * @param {string | number} documentId - the document identifier
   * @param {string} collection - the Firestore collection path
   * @returns {Promise<boolean>}
   */
  @Cordova()
  documentExistsInFirestoreCollection(documentId: string | number, collection: string): Promise<boolean> {
    return;
  }

  /**
   * Fetches a single document from a Firestore collection.
   *
   * @param {string | number} documentId - the document identifier
   * @param {string} collection - the Firestore collection path
   * @returns {Promise<any>} the document data as a JSON object
   */
  @Cordova()
  fetchDocumentInFirestoreCollection(documentId: string | number, collection: string): Promise<any> {
    return;
  }

  /**
   * Fetches all documents from a Firestore collection, optionally filtered.
   *
   * @param {string} collection - the Firestore collection path
   * @param {FirestoreFilter[]} [filters] - an array of filter arrays, e.g. `["where", "age", ">=", 18]`,
   *   `["orderBy", "name", "asc"]`, `["startAt", value]`, `["endAt", value]`, `["limit", count]`
   * @returns {Promise<Record<string, any>>} a JSON object mapping document IDs to document data
   */
  @Cordova()
  fetchFirestoreCollection(collection: string, filters?: FirestoreFilter[]): Promise<Record<string, any>> {
    return;
  }

  /**
   * Registers a real-time listener on a single document in a Firestore collection.
   * Emits a `{eventType: 'id', id}` event once, followed by a `{eventType: 'change', ...}`
   * event on every subsequent change.
   *
   * @param {string | number} documentId - the document identifier
   * @param {string} collection - the Firestore collection path
   * @param {boolean} includeMetadata - whether to include metadata-only changes
   * @returns {Observable<FirestoreListenerIdEvent | FirestoreDocumentChangeEvent>}
   */
  @Cordova({
    observable: true,
    callbackOrder: 'reverse',
  })
  listenToDocumentInFirestoreCollection(
    documentId: string | number,
    collection: string,
    includeMetadata: boolean
  ): Observable<FirestoreListenerIdEvent | FirestoreDocumentChangeEvent> {
    return;
  }

  /**
   * Registers a real-time listener on an entire Firestore collection, optionally filtered.
   * Emits a `{eventType: 'id', id}` event once, followed by a `{eventType: 'change', documents}`
   * event on every subsequent change.
   *
   * @param {string} collection - the Firestore collection path
   * @param {FirestoreFilter[]} [filters] - query filters, same format as fetchFirestoreCollection
   * @param {boolean} includeMetadata - whether to include metadata-only changes
   * @returns {Observable<FirestoreListenerIdEvent | FirestoreCollectionChangeEvent>}
   */
  @Cordova({
    observable: true,
    callbackOrder: 'reverse',
  })
  listenToFirestoreCollection(
    collection: string,
    filters: FirestoreFilter[] | undefined,
    includeMetadata: boolean
  ): Observable<FirestoreListenerIdEvent | FirestoreCollectionChangeEvent> {
    return;
  }

  /**
   * Removes a previously registered Firestore snapshot listener.
   *
   * @param {string | number} listenerId - the listener ID returned in the initial listener response
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  removeFirestoreListener(listenerId: string | number): Promise<any> {
    return;
  }
}
