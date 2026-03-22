# FAQ

### Cordova Management Tips

**1) Use the [Ionic CLI](https://ionicframework.com/docs/cli) to add/update/delete plugins.**

Instead of directly editing `config.xml` and `package.json`. Use `ionic` in front of Cordova commands for a better experience and additional functionality (`ionic cordova build ios` instead of `cordova build ios`).

**2) Upgrade plugins by removing, then re-adding them.**

```bash
ionic cordova plugin remove cordova-plugin-camera
ionic cordova plugin add cordova-plugin-camera
```

**3) Install explicit versions.**

To ensure that the same version of a plugin is always installed via `npm install`, specify the version number:

```bash
ionic cordova plugin add cordova-plugin-camera@4.3.2
```

**4) Restore Cordova in an existing Ionic project**

Useful when adding new developers to a project. `ionic cordova prepare` restores platforms and plugins from `package.json` and `config.xml`. The version to be installed is taken from `package.json` or `config.xml`, if found in those files. In case of conflicts, `package.json` is given precedence over `config.xml`.

**5) Troubleshoot Cordova issues with Ionic CLI commands**

* `ionic doctor list`: Detects [common issues](https://ionicframework.com/docs/cli/commands/doctor-list) and suggests steps to fix them
* `ionic repair`: Remove, then [regenerate](https://ionicframework.com/docs/cli/commands/repair) all dependencies

### Understanding Version Numbers

For any given plugin, the Awesome Cordova Plugins (TypeScript code) and Cordova (native code) version numbers will not match. The Awesome Cordova Plugins version number is found in `package.json`:

```json
"@awesome-cordova-plugins/camera": "^6.0.0"
```

The Cordova plugin version number is found in both `package.json` and `config.xml`:

```json
"cordova-plugin-camera": "4.0.3"
```

```xml
<plugin name="cordova-plugin-camera" spec="4.0.3" />
```

When checking for new native functionality or bug fixes, look for new versions on the Cordova plugin GitHub page itself (here's the [Camera one](https://github.com/apache/cordova-plugin-camera), for example).

To check for new Awesome Cordova Plugins releases (may include exposing methods recently added by the Cordova plugin, etc.), see the [releases page](https://github.com/danielsogl/awesome-cordova-plugins/releases).

### Troubleshooting Failed Builds

Research the build error(s) by checking out these resources:

* Google & [StackOverflow](https://stackoverflow.com/): Many issues are documented online
* Ask the [Ionic Community Forum](https://forum.ionicframework.com/)
* Check the plugin's GitHub issues page

#### Cordova Plugin Conflicts

Plugins can conflict with each other when they share the same underlying native dependencies or when more than one plugin tries to access the same native code at once. For example, common libraries like the Google Play Services version (Google Maps is using GPS v24.2 but Firebase wants GPS v27.1). Keeping these plugins updated regularly can help with this.

Another tip is to ensure that your app uses only one plugin per specific feature/functionality (example: Push Notifications).

### Recommended Upgrade Strategy

The most stable apps are routinely updated, especially at the native layer. Keeping native plugins up to date ensures your project has the latest security fixes, new features, and improved performance.

Update your project's plugins one at a time, ideally in separate code branches. This reduces the surface area that issues can arise from — if you update everything in your project at once, it's sometimes hard to tell where the problem stems from.

#### When should I update?

* When a new feature/bug fix is released: Run `npm outdated` to see a list of available updates.
* When new major versions are released: Official blogs, such as the [Cordova blog](https://cordova.apache.org/blog/) and [Ionic blog](https://ionicframework.com/blog/), will publish announcements and news.
* Evaluate the nature of the update: is it a shiny new feature or critical security fix?
* Timing: Where does it fit in against your team's project goals?
