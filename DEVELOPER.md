# Ionic Native Developer Guide

This is a short guide on creating new plugin wrappers for Ionic Native.


## Creating Plugin Wrappers

Let's take a look at the existing plugin wrapper for Geolocation to see what goes into an Ionic Native plugin (comments have been removed for clarity):

```
@Plugin({
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation'
})
export class Geolocation {

  @Cordova()
  static getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> { return }

  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch'
  })
  static watchPosition(options?: GeolocationOptions): Observable<Geoposition> { return }
}
```

### The Plugin Class

First and foremost, we want to create a class representing our plugin, in this case Geolocation.

```
class Geolocation {

}
```

#### Class Metadata

Next, we need to specify some information about this plugin. Ionic Native is written in [TypeScript](http://www.typescriptlang.org/) and makes use of a feature called [decorators](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Decorators.md). Long story short, decorators allow us to modify or add info to classes and properties using a declarative syntax.

For example, the `@Plugin` decorator adds information about the plugin to our Geolocation class:

```
@Plugin({
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation'
})
export class Geolocation {

}
```

Here, `plugin` is the name of the plugin package on npm and used when calling `cordova plugin add`.

`pluginRef` refers to the where on `window` the underlying Cordova plugin is normally exposed.  For example, in the case of the Cordova Geolocation plugin, normally you would make calls like `window.navigator.geolocation.getCurrentPosition({}, success, error)`, so the `pluginRef` in this case is `navigator.geolocation`.

#### Class Methods

Now all that's left is to add the plugin methods, in this case `getCurrentPosition` and `watchPosition`.

Let's take a look at `getCurrentPosition` first.

```
  @Cordova()
  static getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> { return }
```

It's just a stub. The `return` is only there to keep the TypeScript type-checker from complaining since we indicate that `getCurrentPosition` returns a `Promise<Geoposition>`.

By default, the `@Cordova` decorator wraps the plugin callbacks in a Promise that resolves when the success callback is called and rejects when the error callback is called.  It also ensures that Cordova and the underlying plugin are available, and prints helpful diagnostics if they aren't.

You'll also notice that `getCurrentPosition` is a static method. That's because the plugin class is just a utility class to call the underlying Cordova plugin methods, it's not an instance and has no state.

Next, let's look at the `watchPosition` method.

```
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch'
  })
  static watchPosition(options?: GeolocationOptions): Observable<Geoposition> { return }
```

The `@Cordova` decorator has a few more options now.

`observable` indicates that this method may call its callbacks multiple times, so `@Cordova` wraps it in an [`Observable`](https://github.com/driftyco/ionic-native#promises-and-observables) instead of a Promise.

`callbackOrder` refers to the method signature of the underlying Cordova plugin, and tells Ionic Native which arguments are the callbacks to map to the wrapping Promise or Observable.  In this case, the signature is [`watchPosition(success, error, options)`](https://github.com/apache/cordova-plugin-geolocation#navigatorgeolocationwatchposition), so we need to tell `@Cordova` that the callbacks are the first arguments, not the last arguments.  For rare cases, you can also specify the options `successIndex` and `errorIndex` to indicate where in the argument list the callbacks are located.

`clearFunction` is used in conjunction with the `observable` option and indicates the function to be called when the Observable is disposed.

### Testing your changes

You need to run `npm run build_bundle` in the `ionic-native` project, this will create a `dist` directory. Then, you must go to your ionic application folder and replace your current `node_modules/ionic-native/dist/` with the newly generated one.

### 'Wrapping' Up

That's it! The only thing left to do is rigorously document the plugin and it's usage.  Take a look at some of the other plugins for good documentation styles.
