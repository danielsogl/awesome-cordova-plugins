import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * OAuth configuration data.
 */
export interface Config {
  /** The client ID as per the Spotify dev console. */
  clientId: string;

  /** The redirect URI as entered in the Spotify dev console. */
  redirectUrl: string;

  /**
   * Safety margin time (in milliseconds) for the token refresh.
   *
   * The plugin applies a safety margin to the token lifetime in order
   * to give the token user enough time to perform all operations needed.
   *
   * Otherwise the plugin might hand out a token that is already expired
   * before it could ever be used.
   *
   * The safety margin defaults to 30s.
   */
  refreshSafetyMargin?: number;

  /** Requested OAuth scopes. */
  scopes: string[];

  /** The token exchange URL. */
  tokenExchangeUrl: string;

  /** The token refresh URL. */
  tokenRefreshUrl: string;
}

/**
 * The authorization data.
 */
export interface AuthorizationData {
  /** A valid access token. */
  accessToken: string;

  /** The encrypted refresh token. */
  encryptedRefreshToken: string;

  /** The date (from UTC, in milliseconds) when the given access token expires. */
  expiresAt: number;
}

/**
 * @name Spotify Auth
 * @description
 * Cordova plugin for authenticating with Spotify
 * > https://github.com/Festify/cordova-spotify-oauth
 * @usage
 * ```typescript
 * import { SpotifyAuth } from '@awesome-cordova-plugins/spotify-auth/ngx';
 *
 * // [...]
 *
 * constructor(private spotifyAuth: SpotifyAuth) { }
 *
 * // [...]
 *
 * const config = {
 *   clientId: "<SPOTIFY CLIENT ID>",
 *   redirectUrl: "<REDIRECT URL, MUST MATCH WITH AUTH ENDPOINT AND SPOTIFY DEV CONSOLE>",
 *   scopes: ["streaming"], // see Spotify Dev console for all scopes
 *   tokenExchangeUrl: "<URL OF TOKEN EXCHANGE HTTP ENDPOINT>",
 *   tokenRefreshUrl: "<URL OF TOKEN REFRESH HTTP ENDPOINT>",
 * };
 *
 * ...
 *
 * this.spotifyAuth.authorize(config)
 *   .then(({ accessToken, expiresAt }) => {
 *     console.log(`Got an access token, its ${accessToken}!`);
 *     console.log(`Its going to expire in ${expiresAt - Date.now()}ms.`);
 *   });
 *
 * // [...]
 *
 * this.spotifyAuth.forget();
 *
 * // [...]
 * ```
 */
@Plugin({
  pluginName: 'SpotifyAuth',
  plugin: 'cordova-spotify-oauth',
  pluginRef: 'cordova.plugins.spotifyAuth',
  repo: 'https://github.com/Festify/cordova-spotify-oauth',
  install: 'ionic cordova plugin add cordova-spotify-oauth --variable LOCAL_STORAGE_KEY="SpotifyOAuthData"',
  installVariables: ['LOCAL_STORAGE_KEY'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SpotifyAuth extends AwesomeCordovaNativePlugin {
  /**
   * Obtains valid authorization data.
   *
   * This method performs the necessary steps in order to obtain a valid
   * access token. It performs the OAuth dance prompting the user to log in,
   * exchanges the obtained authorization code for an access and a refresh
   * token, caches those, and returns both to the developer.
   *
   * When it is invoked again, it will first check whether the cached access
   * token is still valid (including a configurable safety margin) and the
   * scopes equal, and return the token directly if that is the case. Otherwise,
   * the method will transparently refresh the token (or obtain a new one if
   * the scopes changed) and return that.
   *
   * Bottom line - always call this if you need a valid access token in your code.
   *
   * @param cfg {Config} configuration
   * @returns {Promise<AuthorizationData>}
   */
  @Cordova({
    sync: false,
  })
  authorize(cfg: Config): Promise<AuthorizationData> {
    return;
  }

  /**
   * Removes all cached data so that `authorize` performs the full
   * oauth dance again.
   *
   * This is akin to a "logout".
   *
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  forget(): void {}
}
