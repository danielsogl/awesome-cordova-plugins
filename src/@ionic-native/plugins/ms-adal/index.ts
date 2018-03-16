import { Plugin, IonicNativePlugin, checkAvailability, InstanceProperty, CordovaInstance } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface AuthenticationResult {

  accessToken: string;
  accesSTokenType: string;
  expiresOn: Date;
  idToken: string;
  isMultipleResourceRefreshToken: boolean;
  status: string;
  statusCode: number;
  tenantId: string;
  userInfo: UserInfo;

  /**
   * Creates authorization header for web requests.
   * @returns {String} The authorization header.
   */
  createAuthorizationHeader(): string;

}

export interface TokenCache {
  clear(): void;
  readItems(): Promise<TokenCacheItem[]>;
  deleteItem(item: TokenCacheItem): void;
}

export interface TokenCacheItem {
  accessToken: string;
  authority: string;
  clientId: string;
  displayableId: string;
  expiresOn: Date;
  isMultipleResourceRefreshToken: boolean;
  resource: string;
  tenantId: string;
  userInfo: UserInfo;
}

export interface UserInfo {
  displayableId: string;
  userId: string;
  familyName: string;
  givenName: string;
  identityProvider: string;
  passwordChangeUrl: string;
  passwordExpiresOn: Date;
  uniqueId: string;
}


/**
 * @name MS ADAL
 * @description
 * Active Directory Authentication Library (ADAL) plugin.
 * Active Directory Authentication Library ([ADAL](https://docs.microsoft.com/en-us/dotnet/api/microsoft.identitymodel.clients.activedirectory?view=azure-dotnet))
 * plugin provides easy to use authentication functionality for your Apache Cordova apps by taking advantage of
 * Windows Server Active Directory and Windows Azure Active Directory. Here you can find the source code for the library.
 * @usage
 * ```typescript
 * import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal';
 *
 *
 * constructor(private msAdal: MSAdal) {}
 *
 * ...
 *
 * let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');
 *
 * authContext.acquireTokenAsync('https://graph.windows.net', 'a5d92493-ae5a-4a9f-bcbf-9f1d354067d3', 'http://MyDirectorySearcherApp')
 *   .then((authResponse: AuthenticationResult) => {
 *     console.log('Token is' , authResponse.accessToken);
 *     console.log('Token will expire on', authResponse.expiresOn);
 *   })
 *   .catch((e: any) => console.log('Authentication failed', e));
 *
 *
 * ```
 *
 * @classes
 * AuthenticationContext
 * @interfaces
 * AuthenticationResult
 * TokenCache
 * TokenCacheItem
 * UserInfo
 */
@Plugin({
  pluginName: 'MSADAL',
  plugin: 'cordova-plugin-ms-adal',
  pluginRef: 'Microsoft.ADAL',
  repo: 'https://github.com/AzureAD/azure-activedirectory-library-for-cordova',
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class MSAdal extends IonicNativePlugin {

  createAuthenticationContext(authority: string, validateAuthority: boolean = true) {
    let authContext: any;
    if (checkAvailability(MSAdal.getPluginRef(), null, MSAdal.getPluginName()) === true) {
      authContext = new (MSAdal.getPlugin()).AuthenticationContext(authority);
    }
    return new AuthenticationContext(authContext);
  }

}

/**
 * @hidden
 */
export class AuthenticationContext {

  @InstanceProperty
  authority: string;

  @InstanceProperty
  validateAuthority: boolean;

  @InstanceProperty
  tokenCache: any;

  constructor(private _objectInstance: any) {}

  /**
   * Acquires token using interactive flow. It always shows UI and skips token from cache.
   *
   * @param   {String}  resourceUrl Resource identifier
   * @param   {String}  clientId    Client (application) identifier
   * @param   {String}  redirectUrl Redirect url for this application
   * @param   {String}  userId      User identifier (optional)
   * @param   {String}  extraQueryParameters
   *                                Extra query parameters (optional)
   *                                Parameters should be escaped before passing to this method (e.g. using 'encodeURI()')
   * @returns {Promise} Promise either fulfilled with AuthenticationResult object or rejected with error
   */
  @CordovaInstance({
    otherPromise: true
  })
  acquireTokenAsync(resourceUrl: string, clientId: string, redirectUrl: string, userId?: string, extraQueryParameters?: any): Promise<AuthenticationResult> { return; }

  /**
   * Acquires token WITHOUT using interactive flow. It checks the cache to return existing result
   * if not expired. It tries to use refresh token if available. If it fails to get token without
   * displaying UI it will fail. This method guarantees that no UI will be shown to user.
   *
   * @param   {String}  resourceUrl Resource identifier
   * @param   {String}  clientId    Client (application) identifier
   * @param   {String}  userId      User identifier (optional)
   * @returns {Promise} Promise either fulfilled with AuthenticationResult object or rejected with error
   */
  @CordovaInstance({
    otherPromise: true
  })
  acquireTokenSilentAsync(resourceUrl: string, clientId: string, userId?: string): Promise<AuthenticationResult> { return; }

}
