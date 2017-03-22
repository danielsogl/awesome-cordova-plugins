# Ionic Native Developer Guide

This is a short guide on creating new plugin wrappers for Ionic Native.


## Creating Plugin Wrappers

First, let's start by creating a new plugin wrapper from template.
 
```
// Call this command, and replace PluginName with the name of the plugin you wish to add
// Make sure to capitalize the first letter, or use CamelCase if necessary.
 
gulp plugin:create -n PluginName

// add -m flag to get a minimal template to start with
gulp plugin:create -m -n PluginName
```


Let's take a look at the existing plugin wrapper for Geolocation to see what goes into an Ionic Native plugin (comments have been removed for clarity):

```
@Plugin({
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation'
})
@Injectable()
export class Geolocation {

  @Cordova()
  getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> { return; }

  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch'
  })
  watchPosition(options?: GeolocationOptions): Observable<Geoposition> { return; }
}
```

### The Plugin Class

First and foremost, we want to create a class representing our plugin, in this case Geolocation.

```
@Injectable()
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
@Injectable()
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
  getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> { return }
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
  watchPosition(options?: GeolocationOptions): Observable<Geoposition> { return }
```

The `@Cordova` decorator has a few more options now.

`observable` indicates that this method may call its callbacks multiple times, so `@Cordova` wraps it in an [`Observable`](https://github.com/driftyco/ionic-native#promises-and-observables) instead of a Promise.

`callbackOrder` refers to the method signature of the underlying Cordova plugin, and tells Ionic Native which arguments are the callbacks to map to the wrapping Promise or Observable.  In this case, the signature is [`watchPosition(success, error, options)`](https://github.com/apache/cordova-plugin-geolocation#navigatorgeolocationwatchposition), so we need to tell `@Cordova` that the callbacks are the first arguments, not the last arguments.  For rare cases, you can also specify the options `successIndex` and `errorIndex` to indicate where in the argument list the callbacks are located.

`clearFunction` is used in conjunction with the `observable` option and indicates the function to be called when the Observable is disposed.

### Testing your changes

You need to run `npm run build` in the `ionic-native` project, this will create a `dist/packages-dist` directory. Then, you must go to your ionic application folder and replace your current `node_modules/@ionic-native/` with the newly generated `dist/packages-dist/@ionic-native/` folder.

### Cleaning the code

You need to run `npm run lint` to analyze the code and ensure it's consistency with the repository style. Fix any errors before submitting a PR.

### 'Wrapping' Up

That's it! The only thing left to do is rigorously document the plugin and it's usage. Take a look at some of the other plugins for good documentation styles.

## Commit Message Format

We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking through the project history. But also, we use the git commit messages to generate the our change log. (Ok you got us, it's basically Angular's commit message format).

`type(scope): subject`

#### Type
Must be one of the following:

* **fix**: A bug fix
* **feat**: A new feature
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

#### Scope
The scope could be anything specifying place of the commit change. For example, the name of the plugin being changed

#### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period (.) at the end
* entire length of the commit message must not go over 50 characters