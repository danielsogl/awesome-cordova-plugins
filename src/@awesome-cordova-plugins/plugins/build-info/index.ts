import { Injectable } from '@angular/core';
import { Plugin, CordovaProperty, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name Build Info
 * @description
 * This plugin provides build information.
 * @usage
 * ```
 * import { BuildInfo } from '@awesome-cordova-plugins/build-info/ngx';
 *
 * this.platform.ready().then(() => {
 *     console.log('BuildInfo.baseUrl        =' + BuildInfo.baseUrl)
 *     console.log('BuildInfo.packageName    =' + BuildInfo.packageName)
 *     console.log('BuildInfo.basePackageName=' + BuildInfo.basePackageName)
 *     console.log('BuildInfo.displayName    =' + BuildInfo.displayName)
 *     console.log('BuildInfo.name           =' + BuildInfo.name)
 *     console.log('BuildInfo.version        =' + BuildInfo.version)
 *     console.log('BuildInfo.versionCode    =' + BuildInfo.versionCode)
 *     console.log('BuildInfo.debug          =' + BuildInfo.debug)
 *     console.log('BuildInfo.buildType      =' + BuildInfo.buildType)
 *     console.log('BuildInfo.flavor         =' + BuildInfo.flavor)
 *     console.log('BuildInfo.buildDate      =' + BuildInfo.buildDate)
 *     console.log('BuildInfo.installDate    =' + BuildInfo.installDate)
 * })
 * ```
 */
@Plugin({
  pluginName: 'BuildInfo',
  plugin: 'cordova-plugin-buildinfo',
  pluginRef: 'BuildInfo',
  repo: 'https://github.com/lynrin/cordova-plugin-buildinfo',
  platforms: ['Android', 'iOS', 'Windows', 'macOS', 'browser', 'Electron'],
})
@Injectable()
export class BuildInfo extends AwesomeCordovaNativePlugin {
  /**
   * The baseUrl where cordova.js was loaded.
   */
  @CordovaProperty()
  baseUrl: string;

  /**
   * Get the packageName of Application ID.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|Package Name|String|
   * |iOS|Bundle Identifier|String|
   * |Windows|Identity name|String|
   * |macOS(OS X)|Bundle Identifier|String|
   * |Browser|Get the id attribute of the widget element in config.xml file.|String|
   * |Electron|Get the id attribute of the widget element in config.xml file.|String|
   */
  @CordovaProperty()
  packageName: string;

  /**
   * Android only.
   *
   * Get the packageName of BuildConfig class.
   *
   * If you use the configure of "build types" or "product flavors", because you can specify a different package name is the id attribute of the widget element of config.xml, is the property to get the package name that BuildConfig class belongs.
   * (ought be the same as the id attribute of the widget element of config.xml)
   *
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|Package name of BuildConfig class|String|
   * |iOS|Bundle Identifier(equals BuildInfo.packageName)|String|
   * |Windows|Identity name(equals BuildInfo.packageName)|String|
   * |macOS(OS X)|Bundle Identifier(equals BuildInfo.packageName)|String|
   * |Browser|equals BuildInfo.packageName|String|
   * |Electron|equals BuildInfo.packageName|String|
   */
  @CordovaProperty()
  basePackageName: string;

  /**
   * Get the displayName.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|Application Label|String|
   * |iOS|CFBundleDisplayName (CFBundleName if not present)|String|
   * |Windows|Get the DisplayName attribute of the VisualElements element in AppxManifest.xml file.|String|
   * |macOS(OS X)|CFBundleDisplayName (CFBundleName if not present)|String|
   * |Browser|Get the short attribute of the name element in config.xml file.|String|
   * |Electron|Get the short attribute of the name element in config.xml file.|String|
   */
  @CordovaProperty()
  displayName: string;

  /**
   * Get the name.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|Application Label(equal BuildInfo.displayName)|String|
   * |iOS|CFBundleName|String|
   * |Windows|Windows Store display name|String|
   * |macOS(OS X)|CFBundleName|String|
   * |Browser|Get value of the name element in config.xml file.|String|
   * |Electron|Get value of the name element in config.xml file.|String|
   */
  @CordovaProperty()
  name: string;

  /**
   * Get the version.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|BuildConfig.VERSION_NAME|String|
   * |iOS|CFBundleShortVersionString|String|
   * |Windows|Major.Minor.Build ex) "1.2.3"|String|
   * |macOS(OS X)|CFBundleShortVersionString|String|
   * |Browser|Get the version attribute of the widget element in config.xml file.|String|
   * |Electron|Get the version attribute of the widget element in config.xml file.|String|
   */
  @CordovaProperty()
  version: string;

  /**
   * Get the version code.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|BuildConfig.VERSION_CODE|integer|
   * |iOS|CFBundleVersion|String|
   * |Windows|Major.Minor.Build.Revision ex) "1.2.3.4"|String|
   * |macOS(OS X)|CFBundleVersion|String|
   * |Browser|equals BuildInfo.version|String|
   * |Electron|equals BuildInfo.version|String|
   */
  @CordovaProperty()
  versionCode: string | number;

  /**
   * Get the debug flag.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|BuildConfig.DEBUG|Boolean|
   * |iOS|defined "DEBUG" is true|Boolean|
   * |Windows|isDevelopmentMode is true|Boolean|
   * |macOS(OS X)|defined "DEBUG" is true|Boolean|
   * |Browser|Always false|Boolean|
   * |Electron|True when ```cordova build electron --debug``` is executed with the "--debug" flag.|Boolean|
   */
  @CordovaProperty()
  debug: boolean;

  /**
   * Android , Windows Only.
   *
   * Get the build type.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|BuildConfig.BUILD_TYPE|String|
   * |iOS|empty string|String|
   * |Windows|"release" or "debug"|String|
   * |macOS(OS X)|empty string|String|
   * |Browser|empty string|String|
   * |Electron|empty string|String|
   *
   */
  @CordovaProperty()
  buildType: string;
  /**
   * Android Only.
   *
   * Get the flavor.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|BuildConfig.FLAVOR|String|
   * |iOS|empty string|String|
   * |Windows|empty string|String|
   * |macOS(OS X)|empty string|String|
   * |Browser|empty string|String|
   * |Electron|empty string|String|
   */
  @CordovaProperty()
  flavor: string;

  /**
   * Get the build date and time in the Date object returns.
   *
   * Attention:
   * - Android: Add the BuildInfo.gradle file to your Android project.
   *   The BuildInfo.gradle file contains the setting to add the _BUILDINFO_TIMESTAMP field to the BuildConfig class.
   * - Windows: Add the buildinfo.resjson file to your Windows project.
   *   The buildinfo.resjson file into the "strings" folder.
   *   And also add a task to rewrite buildinfo.resjson in the CordovaApp.projitems file.
   * - Browser and Electron: When ```cordova prepare``` is executed Build date and time is embedded in
   *   platforms/**browser**\/www/plugins/cordova-plugin-buildinfo/src/browser/BuildInfoProxy.js file.
   *   (Or platforms/**electron**\/www/plugins/cordova-plugin-buildinfo/src/browser/BuildInfoProxy.js file.)
   *   ```cordova prepare``` is also executed for ```cordova build```, ```cordova run``` and ```cordova platform add```.
   *   (Reference: [Hooks Guide - Apache Cordova](https://cordova.apache.org/docs/en/9.x/guide/appdev/hooks/index.html))
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|BuildConfig.\_BUILDINFO\_TIMESTAMP value|Date|
   * |iOS|Get the modification date and time of the Info.plist file acquired from the executionPath property of the main bundle.|Date|
   * |Windows|Resource value of "/buildinfo/Timestamp" string.|Date|
   * |macOS(OS X)|Get the modification date and time of the config.xml file acquired from the resource of the main bundle.|Date|
   * |Browser|The date and time when ```cordova prepare``` was executed.|Date|
   * |Electron|The date and time when ```cordova prepare``` was executed.|Date|
   *
   */
  @CordovaProperty()
  buildDate: Date;

  /**
   * Get the install date and time in the Date object returns.
   *
   * Attention:
   * - Browser and Electron: Installation date and time is unknown.
   *
   * |Platform|Value|Type|
   * |--------|-----|----|
   * |Android|The firstInstallTime property of PackageInfo|Date|
   * |iOS|Get the creation date and time of the document directory.|Date|
   * |Windows|The installedDate property of Windows.ApplicatinoModel.Package.current|Date|
   * |macOS(OS X)|Date and time of kMDItemDateAdded recorded in File Metadata of application package.|Date|
   * |Browser|Not available.|null|
   * |Electron|Not available.|null|
   */
  @CordovaProperty()
  installDate: Date | null;

  /**
   * Windows Only.
   *
   * Get the windows extra information.
   */
  @CordovaProperty()
  windows?: {
    /**
     * indows.ApplicationModel.Package.current.id.architecture|
     */
    architecture: number;
    /**
     * Windows.ApplicationModel.Package.current.description|
     */
    description: string;
    /**
     * Windows.ApplicationModel.Package.current.displayName|
     */
    displayName: string;
    /**
     * Windows.ApplicationModel.Package.current.id.familyName|
     */
    familyName: string;
    /**
     * Windows.ApplicationModel.Package.current.id.fullName|
     */
    fullName: string;
    logo: WindowsLogo;
    /**
     * Windows.ApplicationModel.Package.current.id.publisher|
     */
    publisher: string;
    /**
     * Windows.ApplicationModel.Package.current.id.publisherId|
     */
    publisherId: string;
    /**
     * Windows.ApplicationModel.Package.current.publisherDisplayName|
     */
    publisherDisplayName: string;
    /**
     * Windows.ApplicationModel.Package.current.id.resourceId|
     */
    resourceId: string;
    /**
     * Windows.ApplicationModel.Package.current.id.version|
     */
    version: WindowsVersionInfo;
  };
}

export interface WindowsLogo {
  /**
   * Windows.ApplicationModel.Package.logo.absoluteCanonicalUri
   */
  absoluteCannonicalUri: string;
  /**
   * Windows.ApplicationModel.Package.logo.absoluteUri
   */
  absoluteUri: string;
  /**
   * Windows.ApplicationModel.Package.logo.displayIri
   */
  displayIri: string;
  /**
   * Windows.ApplicationModel.Package.logo.displayUri
   */
  displayUri: string;
  /**
   * Windows.ApplicationModel.Package.logo.path
   */
  path: string;
  /**
   * Windows.ApplicationModel.Package.logo.rawUri
   */
  rawUri: string;
}

export interface WindowsVersionInfo {
  /**
   * Windows.ApplicationModel.Package.current.id.version.major
   */
  major: number;
  /**
   * Windows.ApplicationModel.Package.current.id.version.minor
   */
  minor: number;
  /**
   * Windows.ApplicationModel.Package.current.id.version.build
   */
  build: number;
  /**
   * Windows.ApplicationModel.Package.current.id.version.revision
   */
  revision: number;
}
