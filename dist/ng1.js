/**
 * Initialize the ngCordova Angular module if we're running in ng1
 */
function initAngular1() {
    if (window.angular) {
        window.angular.module('ngCordova', []);
    }
}
exports.initAngular1 = initAngular1;
/**
 * Publish a new Angular 1 service for this plugin.
 */
function publishAngular1Service(config, cls) {
    var serviceName = '$cordova' + cls.name;
    console.log('Registering Angular1 service', serviceName);
    window.angular.module('ngCordova').service(serviceName, [function () {
            var funcs = {};
            for (var k in cls) {
            }
            return funcs;
        }]);
}
exports.publishAngular1Service = publishAngular1Service;
//# sourceMappingURL=ng1.js.map