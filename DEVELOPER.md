# Awesome Cordova Plugins Developer Guide

This is a short guide on creating new plugin wrappers for Awesome Cordova Plugins.

## Creating Plugin Wrappers

First, create a new plugin wrapper from the template:

```bash
# Replace PluginName with the name of the plugin you wish to add.
# Use CamelCase for the name (e.g. BarcodeScanner, NativeAudio).
npm run plugin:create -- -n PluginName
```

This creates a new directory `src/@awesome-cordova-plugins/plugins/plugin-name/` with a single `index.ts` file where all plugin definitions go.

## Plugin Anatomy

Let's look at the Geolocation plugin wrapper as an example:

```typescript
@Plugin({
  pluginName: 'Geolocation',
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation',
  repo: 'https://github.com/apache/cordova-plugin-geolocation',
  platforms: ['Android', 'iOS', 'Browser'],
})
@Injectable()
export class Geolocation extends AwesomeCordovaNativePlugin {
  @Cordova()
  getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> {
    return;
  }

  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch',
  })
  watchPosition(options?: GeolocationOptions): Observable<Geoposition> {
    return;
  }
}
```

### The Plugin Class

Every plugin wrapper extends `AwesomeCordovaNativePlugin` and uses the `@Injectable()` decorator for Angular DI support:

```typescript
@Injectable()
export class MyPlugin extends AwesomeCordovaNativePlugin {}
```

### @Plugin Decorator

The `@Plugin` decorator provides metadata about the Cordova plugin:

| Property     | Description                            | Example                          |
| ------------ | -------------------------------------- | -------------------------------- |
| `pluginName` | Display name (should match class name) | `'Camera'`                       |
| `plugin`     | npm package name                       | `'cordova-plugin-camera'`        |
| `pluginRef`  | Global reference on `window`           | `'navigator.camera'`             |
| `repo`       | GitHub repository URL                  | `'https://github.com/...'`       |
| `platforms`  | Supported platforms                    | `['Android', 'iOS']`             |
| `install`    | Custom install command (optional)      | `'ionic cordova plugin add ...'` |

The `pluginRef` tells Awesome Cordova Plugins where the Cordova plugin attaches itself. For example, `cordova-plugin-camera` is available at `window.navigator.camera`, so `pluginRef` is `'navigator.camera'`.

### @Cordova Decorator

Wraps a stub method in a call to the Cordova plugin. By default it returns a Promise that resolves on the success callback and rejects on the error callback. It also checks that Cordova and the plugin are installed, printing diagnostics if not.

**Options:**

| Option            | Type                 | Description                                                               |
| ----------------- | -------------------- | ------------------------------------------------------------------------- |
| `observable`      | `boolean`            | Return an Observable instead of a Promise                                 |
| `sync`            | `boolean`            | Return the value directly (no Promise/Observable)                         |
| `methodName`      | `string`             | Cordova method name if different from wrapper method                      |
| `callbackOrder`   | `'reverse'`          | Set if success/error callbacks come before other args                     |
| `callbackStyle`   | `'node' \| 'object'` | `'node'` for `(err, result)` style, `'object'` for callbacks in an object |
| `successName`     | `string`             | Success callback property name (with `callbackStyle: 'object'`)           |
| `errorName`       | `string`             | Error callback property name (with `callbackStyle: 'object'`)             |
| `successIndex`    | `number`             | Custom position of success callback                                       |
| `errorIndex`      | `number`             | Custom position of error callback                                         |
| `clearFunction`   | `string`             | Method to call when Observable is unsubscribed                            |
| `clearWithArgs`   | `boolean`            | Call `clearFunction` with the same args as the initial call               |
| `eventObservable` | `boolean`            | Wrap an event listener in an Observable                                   |
| `event`           | `string`             | Event name (required if `eventObservable: true`)                          |
| `element`         | `string`             | Element to attach event listener to (default: `window`)                   |
| `otherPromise`    | `boolean`            | Set if the Cordova method already returns a Promise                       |
| `platforms`       | `string[]`           | Override supported platforms for this method                              |

**Examples:**

```typescript
// Default: returns a Promise
@Cordova()
someMethod(): Promise<any> { return; }

// Synchronous return
@Cordova({ sync: true })
getVersion(): string { }

// Observable with cleanup
@Cordova({ observable: true, clearFunction: 'clearWatch' })
watchChanges(): Observable<any> { return; }

// Event-based Observable
@Cordova({ eventObservable: true, event: 'onresult' })
onResult(): Observable<any> { return; }
```

### @CordovaProperty

Gets/sets a property on the Cordova plugin object after checking the plugin exists:

```typescript
@CordovaProperty()
someProperty: string;
```

### @CordovaCheck

Checks if the plugin exists before running custom logic. Rejects with an error if the plugin is unavailable:

```typescript
@CordovaCheck()
someMethod(): Promise<any> {
  // Custom logic — only runs if the plugin is available
}
```

Options: `observable` (return empty Observable) or `sync` (return nothing) if plugin is missing.

### @CordovaFunctionOverride

Wraps a stub function in a Cordova plugin call and returns an Observable:

```typescript
@CordovaFunctionOverride()
someMethod(): Observable<any> { return; }
```

## Testing Your Changes

```bash
# Build all packages
npm run build

# Run tests
npm test

# Lint your code
npm run lint
```

To test in a real app, copy the built package to your app's `node_modules`:

```bash
cp -r dist/@awesome-cordova-plugins/plugin-name ../my-app/node_modules/@awesome-cordova-plugins/
```

## Regenerating Documentation

After adding or modifying a plugin, regenerate the documentation:

```bash
npm run readmes
```

This generates plugin README files and updates the GitBook SUMMARY.md from the source code.

## Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
type(scope): subject
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

**Scope:** The plugin name or area being changed (e.g. `camera`, `core`, `build`)

**Subject:** Imperative, present tense, lowercase, no period at end.

Examples:

```
feat(camera): add support for front-facing camera option
fix(geolocation): handle timeout error on Android
docs(nfc): update installation instructions
```
