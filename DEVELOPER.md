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

Running the command above will create a new directory `src/@ionic-native/plugins/plugin-name/` with a single file in there: `index.ts`. This file is where all the plugin definitions should be.

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

`observable` indicates that this method may call its callbacks multiple times, so `@Cordova` wraps it in an [`Observable`](https://github.com/ionic-team/ionic-native#promises-and-observables) instead of a Promise.

`callbackOrder` refers to the method signature of the underlying Cordova plugin, and tells Ionic Native which arguments are the callbacks to map to the wrapping Promise or Observable.  In this case, the signature is [`watchPosition(success, error, options)`](https://github.com/apache/cordova-plugin-geolocation#navigatorgeolocationwatchposition), so we need to tell `@Cordova` that the callbacks are the first arguments, not the last arguments.  For rare cases, you can also specify the options `successIndex` and `errorIndex` to indicate where in the argument list the callbacks are located.

`clearFunction` is used in conjunction with the `observable` option and indicates the function to be called when the Observable is disposed.

### Testing your changes

You need to run `npm run build` in the `ionic-native` project, this will create a `dist` directory. The `dist` directory will contain a sub directory `@ionic-native` with all the packages compiled in there. Copy the package(s) you created/modified to your app's node_modules under the `@ionic-native` directory. (e.g. `cp -r dist/@ionic-native/plugin-name ../my-app/node_modules/@ionic-native/`).

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


### Ionic Native Decorators

#### Plugin
A decorator to wrap the main plugin class, and any other classes that will use `@Cordova` or `@CordovaProperty` decorators. This decorator accepts the following configuration:
- *pluginName*: Plugin name, this should match the class name
- *plugin*: The plugin's NPM package, or Github URL if NPM is not available.
- *pluginRef*: The plugin object reference. Example: 'cordova.file'.
- *repo*: The plugin's Github Repository URL
- *install*: (optional) Install command. This is used in case a plugin has a custom install command (takes variables).
- *platforms*: An array of strings indicating the supported platforms. 

#### Cordova
Checks if the plugin and the method are available before executing. By default, the decorator will wrap the callbacks of the function and return a Promise. This decorator takes the following configuration options:
- **observable**: set to true to return an Observable
- **clearFunction**: an optional name of a method to clear the observable we returned
- **clearWithArgs**: This can be used if clearFunction is set. Set this to true to call the clearFunction with the same arguments used in the initial function.
- **sync**: set to true if the method should return the value as-is without wrapping with Observable/Promise
- **callbackOrder**: set to `reverse` if the success and error callbacks are the first two arguements of the method
- **callbackStyle**: set to `node` if the plugin has one callback with a node style (e.g: `function(err, result){}`), or set to `object` if the callbacks are part of an object
- **successName**: Success function property name. This must be set if callbackStyle is set to object.
- **errorName**: Error function property name. This must be set if callbackStyle is set to object.
- **successIndex**: Set a custom index for the success callback function. This doesn't work if callbackOrder or callbackStyle are set.
- **errorIndex**: Set a custom index for the error callback function. This doesn't work if callbackOrder or callbackStyle are set.
- **eventObservable**: set to true to return an observable that wraps an event listener
- **event**: Event name, this must be set if eventObservable is set to true
- **element**: Element to attach the event listener to, this is optional, defaults to `window`
- **otherPromise**: Set to true if the wrapped method returns a promise
- **platforms**: array of strings indicating supported platforms. Specify this if the supported platforms doesn't match the plugin's supported platforms.

Example:
```ts
@Cordova()
someMethod(): Promise<any> { return; }

@Cordova({ sync: true })
syncMethod(): number { }
```

#### CordovaProperty
Checks if the plugin and property exist before getting/setting the property's value

Example:
```ts
@CordovaProperty
someProperty: string;
```

#### CordovaCheck
Checks if the plugin exists before performing a custom written method. By default, the method will return a promise that will reject with an error if the plugin is not available.  This wrapper accepts two optional configurations:
- **observable**: set to true to return an empty Observable if the plugin isn't available
- **sync**: set to true to return nothing if the plugin isn't available

Example:
```ts
@CordovaCheck()
someMethod(): Promise<any> {
  // anything here will only run if the plugin is available
}
```

#### CordovaFunctionOverride
Wrap a stub function in a call to a Cordova plugin, checking if both Cordova and the required plugin are installed.

Example:
```ts
@CordovaFunctionOverride()
someMethod(): Observable<any> { return; }
```