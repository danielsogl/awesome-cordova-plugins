# Contributing to Awesome Cordova Plugins

## Have an issue?

Before submitting an issue:

- Search existing issues to avoid duplicates
- Make sure you are using the latest version of `@awesome-cordova-plugins/core`
- Ensure `deviceready` has fired before interacting with any plugin

Still having problems? [Open an issue](https://github.com/danielsogl/awesome-cordova-plugins/issues/new/choose) with:

- Short description of the issue
- Steps to reproduce
- Stack trace (if available)

**Please do not submit support requests as issues.** Use the [Discussions](https://github.com/danielsogl/awesome-cordova-plugins/discussions) section instead.

## Want to add a plugin?

Awesome Cordova Plugins is a set of wrappers for Cordova plugins. Adding support for a new plugin is straightforward:

1. Run `npm run plugin:create -- -n PluginName` to scaffold a new plugin wrapper
2. Implement the wrapper following the patterns in existing plugins
3. Submit a pull request

## Development setup

```bash
npm ci
npm run build
npm test
```
