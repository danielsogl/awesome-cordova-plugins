# Awesome Cordova Plugins

Awesome Cordova Plugins is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile app easy.

Awesome Cordova Plugins wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

## Features

- **TypeScript wrappers** for all major Cordova plugins
- **Promise and Observable** support for modern async patterns
- **Angular integration** with automatic change detection via `/ngx` imports
- **Framework-agnostic** — works with Angular, React, or plain TypeScript
- **Capacitor compatible** — use Cordova plugins in Capacitor projects

## Quick Start

Install the core library and any plugin wrapper you need:

```bash
npm install @awesome-cordova-plugins/core
npm install @awesome-cordova-plugins/camera
```

Then install the corresponding Cordova plugin:

```bash
ionic cordova plugin add cordova-plugin-camera
```

See the [Installation](installation.md) guide for detailed framework-specific setup instructions.

## Need Help?

- Browse the [Plugin List](plugins/) to find the wrapper you need
- Check the [FAQ](faq.md) for common issues and solutions
- [Report an issue](https://github.com/danielsogl/awesome-cordova-plugins/issues) or contribute on GitHub

## Maintainer

[Daniel Sogl](https://www.linkedin.com/in/daniel-sogl)
