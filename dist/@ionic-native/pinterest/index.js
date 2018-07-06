var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Pinterest
 * @description
 * Cordova plugin for Pinterest
 *
 * @usage
 * ```typescript
 * import { Pinterest, PinterestUser, PinterestPin, PinterestBoard } from '@ionic-native/pinterest';
 *
 * constructor(private pinterest: Pinterest) { }
 *
 * ...
 *
 * const scopes = [
 *   this.pinterest.SCOPES.READ_PUBLIC,
 *   this.pinterest.SCOPES.WRITE_PUBLIC,
 *   this.pinterest.SCOPES.READ_RELATIONSHIPS,
 *   this.pinterest.SCOPES.WRITE_RELATIONSHIPS
 * ];
 *
 * this.pinterest.login(scopes)
 *   .then(res => console.log('Logged in!', res))
 *   .catch(err => console.error('Error loggin in', err));
 *
 * this.pinterest.getMyPins()
 *   .then((pins: Array<PinterestPin>) => console.log(pins))
 *   .catch(err => console.error(err));
 *
 * this.pinterest.getMe()
 *   .then((user: PinterestUser) => console.log(user));
 *
 * this.pinterest.getMyBoards()
 *   .then((boards: Array<PinterestBoard>) => console.log(boards));
 *
 * ```
 * @interfaces
 * PinterestUser
 * PinterestBoard
 * PinterestPin
 */
var Pinterest = (function (_super) {
    __extends(Pinterest, _super);
    function Pinterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Logs the user in using their Pinterest account.
     * @param scopes {Array<string>} Array of scopes that you need access to. You can use Pinterest.SCOPES constant for convenience.
     * @returns {Promise<any>} The response object will contain the user's profile data, as well as the access token (if you need to use it elsewhere, example: send it to your server and perform actions on behalf of the user).
     */
    Pinterest.prototype.login = function (scopes) { return; };
    /**
     * Gets the authenticated user's profile
     * @param fields {string} Fields to retrieve, separated by commas. Defaults to all available fields.
     * @returns {Promise<PinterestUser>} Returns a promise that resolves with the user's object
     */
    Pinterest.prototype.getMe = function (fields) { return; };
    /**
     *
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestPin>>}
     */
    Pinterest.prototype.getMyPins = function (fields, limit) { return; };
    /**
     *
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestBoard>>}
     */
    Pinterest.prototype.getMyBoards = function (fields, limit) { return; };
    /**
     * Get the authenticated user's likes.
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestPin>>}
     */
    Pinterest.prototype.getMyLikes = function (fields, limit) { return; };
    /**
     * Get the authenticated user's followers.
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestUser>>}
     */
    Pinterest.prototype.getMyFollowers = function (fields, limit) { return; };
    /**
     * Get the authenticated user's followed boards.
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestBoard>>}
     */
    Pinterest.prototype.getMyFollowedBoards = function (fields, limit) { return; };
    /**
     * Get the authenticated user's followed interests.
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<any>}
     */
    Pinterest.prototype.getMyFollowedInterests = function (fields, limit) { return; };
    /**
     * Get a user's profile.
     * @param username
     * @param fields
     * @returns {Promise<PinterestUser>}
     */
    Pinterest.prototype.getUser = function (username, fields) { return; };
    /**
     * Get a board's data.
     * @param boardId
     * @param fields
     * @returns {Promise<PinterestBoard>}
     */
    Pinterest.prototype.getBoard = function (boardId, fields) { return; };
    /**
     * Get Pins of a specific board.
     * @param boardId {string} The ID of the board
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestPin>>}
     */
    Pinterest.prototype.getBoardPins = function (boardId, fields, limit) { return; };
    /**
     * Delete a board.
     * @param boardId {string} The ID of the board
     * @returns {Promise<PinterestUser>}
     */
    Pinterest.prototype.deleteBoard = function (boardId) { return; };
    /**
     * Create a new board for the authenticated user.
     * @param name {string} Name of the board
     * @param desc {string} Optional description of the board
     * @returns {Promise<PinterestBoard>}
     */
    Pinterest.prototype.createBoard = function (name, desc) { return; };
    /**
     * Get a Pin by ID.
     * @param pinId {string} The ID of the Pin
     * @param fields {string} Optional fields separated by comma
     * @returns {Promise<PinterestPin>}
     */
    Pinterest.prototype.getPin = function (pinId, fields) { return; };
    /**
     * Deletes a pin
     * @param pinId {string} The ID of the pin
     * @returns {Promise<any>}
     */
    Pinterest.prototype.deletePin = function (pinId) { return; };
    /**
     * Creates a Pin
     * @param note {string} Note/Description of the pin
     * @param boardId {string} Board ID to put the Pin under
     * @param imageUrl {string} URL of the image to share
     * @param link {string} Optional link to share
     * @returns {Promise<PinterestPin>}
     */
    Pinterest.prototype.createPin = function (note, boardId, imageUrl, link) { return; };
    return Pinterest;
}(IonicNativePlugin));
Pinterest.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Pinterest.ctorParameters = function () { return []; };
__decorate([
    CordovaProperty,
    __metadata("design:type", Object)
], Pinterest.prototype, "SCOPES", void 0);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "login", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getMe", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getMyPins", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getMyBoards", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getMyLikes", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getMyFollowers", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getMyFollowedBoards", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getMyFollowedInterests", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getUser", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getBoard", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getBoardPins", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "deleteBoard", null);
__decorate([
    Cordova({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "createBoard", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "getPin", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "deletePin", null);
__decorate([
    Cordova({
        successIndex: 4,
        errorIndex: 5
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], Pinterest.prototype, "createPin", null);
Pinterest = __decorate([
    Plugin({
        pluginName: 'Pinterest',
        plugin: 'cordova-plugin-pinterest',
        pluginRef: 'cordova.plugins.Pinterest',
        repo: 'https://github.com/zyramedia/cordova-plugin-pinterest',
        install: 'ionic cordova plugin add cordova-plugin-pinterest --variable APP_ID=YOUR_APP_ID',
        installVariables: ['APP_ID'],
        platforms: ['Android', 'iOS']
    })
], Pinterest);
export { Pinterest };
//# sourceMappingURL=index.js.map