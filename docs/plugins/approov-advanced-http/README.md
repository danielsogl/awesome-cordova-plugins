---
description: >-
  HTTP plugin for Cordova and Ionic. Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.  Advantages over Javascript…
---

# HTTP

Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.

Advantages over Javascript requests:
- SSL / TLS Pinning
- CORS restrictions do not apply
- Handling of HTTP code 401 - read more at [Issue CB-2415](https://issues.apache.org/jira/browse/CB-2415)

Note: This plugin extends the pre-existing [cordova-advanced-http-plugin](https://github.com/silkimen/cordova-plugin-advanced-http),
we have only added approov functionality on top of it. All credit goes to the actual plugin developer.

## Installation

```bash
ionic cordova plugin add @approov/cordova-plugin-advanced-http
npm install @awesome-cordova-plugins/approov-advanced-http
```

**Plugin Repo:** [https://github.com/approov/quickstart-cordova-advancedhttp](https://github.com/approov/quickstart-cordova-advancedhttp)

## Supported Platforms

- Android
- iOS

## Further Information

- [Installation Guide](../../installation.md)
- [FAQ](../../faq.md)
