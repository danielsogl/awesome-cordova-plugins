/**
 * Created by Ibrahim on 3/10/2016.
 */
if(typeof window == 'undefined') var window = {};
if(typeof window.cordova == 'undefined') window.cordova = {};
if(typeof window.cordova.plugins == 'undefined') window.cordova.plugins = {};
if(typeof window.plugins == 'undefined') window.plugins = {};
if(typeof window.navigator == 'undefined') window.navigator = {};

window.plugins.actionsheet = {
    show: function() {},
    hide: function() {}
};

window.navigator.geolocation = {
    getCurrentPosition: function (){},
    watchPosition: function() {},
    clearWatch: function() {}
};