  myvoidfunction(s, f, 'FacebookConnectPlugin', 'getLoginStatus', [])
}

exports.showDialog = function showDialog (options, s, f) {
  myvoidfunction(s, f, 'FacebookConnectPlugin', 'showDialog', [options])
}

exports.login = function login (permissions, s, f) {
  myvoidfunction(s, f, 'FacebookConnectPlugin', 'login', permissions)
}

exports.logEvent = function logEvent (name, params, valueToSum, s, f) {
  // Prevent NSNulls getting into iOS, messes up our [command.argument count]
  if (!params && !valueToSum) {
    myvoidfunction(s, f, 'FacebookConnectPlugin', 'logEvent', [name])
  } else if (params && !valueToSum) {
    myvoidfunction(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params])
  } else if (params && valueToSum) {
    myvoidfunction(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params, valueToSum])
  } else {
    f('Invalid arguments')
  }
}

exports.logPurchase = function logPurchase (value, currency, s, f) {
  myvoidfunction(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency])
}

exports.getAccessToken = function getAccessToken (s, f) {
  myvoidfunction(s, f, 'FacebookConnectPlugin', 'getAccessToken', [])
}

exports.logout = function logout (s, f) {
  myvoidfunction(s, f, 'FacebookConnectPlugin', 'logout', [])
}

exports.api = function api (graphPath, permissions, s, f) {
  permissions = permissions || []
  myvoidfunction(s, f, 'FacebookConnectPlugin', 'graphApi', [graphPath, permissions])
}

exports.appInvite = function appLinks (options, s, f) {
  options = options || {}
  myvoidfunction(s, f, 'FacebookConnectPlugin', 'appInvite', [options])
}

exports.activateApp = function (s, f) {
  myvoidfunction(s, f, 'FacebookConnectPlugin', 'activateApp', [])
}

 function myvoidfunction(){}