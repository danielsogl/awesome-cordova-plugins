function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./plugins/camera'));
__export(require('./plugins/statusbar'));
__export(require('./plugins/toast'));
