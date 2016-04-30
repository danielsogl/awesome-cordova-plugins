declare var window;

/**
 * Initialize the ngCordova Angular module if we're running in ng1
 */
export function initAngular1() {
  if (window.angular) {
    window.angular.module('ngCordova', []);
  }
}

/**
 * Publish a new Angular 1 service for this plugin.
 */
export function publishAngular1Service(config: any, cls: any) {
  let serviceName = '$cordova' + cls.name;
  console.log('Registering Angular1 service', serviceName);
  window.angular.module('ngCordova').service(serviceName, [function() {
    let funcs = {};
    for (var k in cls) {
    }
    return funcs;
  }]);
}
