// This file provides tslib helpers to esbuild, replacing webpack's ProvidePlugin
var tslib = require('tslib');

// Export all tslib helpers to global scope
global.__extends = tslib.__extends;
global.__assign = tslib.__assign;
global.__rest = tslib.__rest;
global.__decorate = tslib.__decorate;
global.__param = tslib.__param;
global.__metadata = tslib.__metadata;
global.__awaiter = tslib.__awaiter;
global.__generator = tslib.__generator;
global.__exportStar = tslib.__exportStar;
global.__values = tslib.__values;
global.__read = tslib.__read;
global.__spread = tslib.__spread;
global.__spreadArrays = tslib.__spreadArrays;
global.__spreadArray = tslib.__spreadArray;
global.__await = tslib.__await;
global.__asyncGenerator = tslib.__asyncGenerator;
global.__asyncDelegator = tslib.__asyncDelegator;
global.__asyncValues = tslib.__asyncValues;
global.__makeTemplateObject = tslib.__makeTemplateObject;
global.__importStar = tslib.__importStar;
global.__importDefault = tslib.__importDefault;
global.__classPrivateFieldGet = tslib.__classPrivateFieldGet;
global.__classPrivateFieldSet = tslib.__classPrivateFieldSet;
