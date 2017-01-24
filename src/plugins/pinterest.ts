import { Plugin, Cordova, CordovaProperty } from './plugin';

export interface PinterestUser {
  /**
   * The unique string of numbers and letters that identifies the user on Pinterest.
   */
  id?: string;
  /**
   * The user’s Pinterest username.
   */
  username?: string;
  /**
   * The user’s first name.
   */
  first_name?: string;
  /**
   * The user’s last name.
   */
  last_name?: string;
  /**
   * The text in the user’s “About you” section in their profile.
   */
  bio?: string;
  /**
   * The date the user created their account in ISO 8601 format
   */
  created_at?: string;
  /**
   * The user’s stats, including how many Pins, follows, boards and likes they have.
   */
  counts?: any;
  /**
   * The user’s profile image. The response returns the image’s URL, width and height.
   */
  image?: any;
}

export interface PinterestBoard {
  /**
   * The unique string of numbers and letters that identifies the board on Pinterest.
   */
  id?: string;
  /**
   * The name of the board.
   */
  name?: string;
  /**
   * The link to the board.
   */
  url?: string;
  /**
   * The user-entered description of the board.
   */
  description?: string;
  /**
   * The first and last name, ID and profile URL of the user who created the board.
   */
  creator?: PinterestUser;
  /**
   * The date the user created the board.
   */
  created_at?: string;
  /**
   * The board’s stats, including how many Pins, followers, user's following and collaborators it has.
   */
  counts?: any;
  /**
   * The user’s profile image. The response returns the image’s URL, width and height.
   */
  image?: any;
}

export interface PinterestPin {
  /**
   * The unique string of numbers and letters that identifies the Pin on Pinterest.
   */
  id?: string;
  /**
   * The URL of the webpage where the Pin was created.
   */
  link?: string;
  /**
   * The URL of the Pin on Pinterest.
   */
  url?: string;
  /**
   * The first and last name, ID and profile URL of the user who created the board.
   */
  creator?: PinterestUser;
  /**
   * The board that the Pin is on.
   */
  board?: PinterestBoard;
  /**
   * The date the Pin was created.
   */
  created_at?: string;
  /**
   * The user-entered description of the Pin.
   */
  note?: string;
  /**
   * The dominant color of the Pin’s image in hex code format.
   */
  color?: string;
  /**
   * The Pin’s stats, including the number of repins, comments and likes.
   */
  counts?: any;
  /**
   * The media type of the Pin (image or video).
   */
  media?: any;
  /**
   * The source data for videos, including the title, URL, provider, author name, author URL and provider name.
   */
  attribution?: any;
  /**
   * The Pin’s image. The default response returns the image’s URL, width and height.
   */
  image?; any;
  /**
   * Extra information about the Pin for Rich Pins. Includes the Pin type (e.g., article, recipe) and related information (e.g., ingredients, author).
   */
  metadata?: any;
}

/**
 * @beta
 * @name Pinterest
 * @description
 * Cordova plugin for Pinterest
 *
 * @usage
 * ```
 * import { Pinterest, PinterestUser, PinterestPin, PinterestBoard } from 'ionic-native';
 *
 * const scopes = [
 *   Pinterest.SCOPES.READ_PUBLIC,
 *   Pinterest.SCOPES.WRITE_PUBLIC,
 *   Pinterest.SCOPES.READ_RELATIONSHIPS,
 *   Pinterest.SCOPES.WRITE_RELATIONSHIPS
 * ];
 *
 * Pinterest.login(scopes)
 *   .then(res => console.log('Logged in!', res))
 *   .catch(err => console.error('Error loggin in', err));
 *
 * Pinterest.getMyPins()
 *   .then((pins: Array<PinterestPin>) => console.log(pins))
 *   .catch(err => console.error(err));
 *
 * Pinterest.getMe()
 *   .then((user: PinterestUser) => console.log(user));
 *
 * Pinterest.getMyBoards()
 *   .then((boards: Array<PinterestBoard>) => console.log(boards));
 *
 * ```
 * @interfaces
 * PinterestUser
 * PinterestBoard
 * PinterestPin
 */
@Plugin({
  pluginName: 'Pinterest',
  plugin: 'cordova-plugin-pinterest',
  pluginRef: 'cordova.plugins.Pinterest',
  repo: 'https://github.com/zyramedia/cordova-plugin-pinterest',
  install: 'ionic plugin add cordova-plugin-pinterest --variable APP_ID=YOUR_APP_ID',
  platforms: ['Android', 'iOS']
})
export class Pinterest {

  /**
   * Convenience constant for authentication scopes
   */
  @CordovaProperty
  SCOPES: {
    READ_PUBLIC: string;
    WRITE_PUBLIC: string;
    READ_RELATIONSHIPS: string;
    WRITE_RELATIONSHIPS: string;
  };

  /**
   * Logs the user in using their Pinterest account.
   * @param scopes {Array<string>} Array of scopes that you need access to. You can use Pinterest.SCOPES constant for convenience.
   * @returns {Promise<any>} The response object will contain the user's profile data, as well as the access token (if you need to use it elsewhere, example: send it to your server and perform actions on behalf of the user).
   */
  @Cordova()
  static login(scopes: string[]): Promise<any> { return; }

  /**
   * Gets the authenticated user's profile
   * @param fields {string} Fields to retrieve, separated by commas. Defaults to all available fields.
   * @returns {Promise<PinterestUser>} Returns a promise that resolves with the user's object
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getMe(fields?: string): Promise<PinterestUser> { return; }

  /**
   *
   * @param fields {string} Optional fields separated by comma
   * @param limit {number} Optional limit, defaults to 100, maximum is 100.
   * @returns {Promise<Array<PinterestPin>>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getMyPins(fields?: string, limit?: number): Promise<Array<PinterestPin>> { return; }

  /**
   *
   * @param fields {string} Optional fields separated by comma
   * @param limit {number} Optional limit, defaults to 100, maximum is 100.
   * @returns {Promise<Array<PinterestBoard>>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getMyBoards(fields?: string, limit?: number): Promise<Array<PinterestBoard>> { return; }

  /**
   * Get the authenticated user's likes.
   * @param fields {string} Optional fields separated by comma
   * @param limit {number} Optional limit, defaults to 100, maximum is 100.
   * @returns {Promise<Array<PinterestPin>>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getMyLikes(fields?: string, limit?: number): Promise<Array<PinterestPin>> { return; }

  /**
   * Get the authenticated user's followers.
   * @param fields {string} Optional fields separated by comma
   * @param limit {number} Optional limit, defaults to 100, maximum is 100.
   * @returns {Promise<Array<PinterestUser>>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getMyFollowers(fields?: string, limit?: number): Promise<Array<PinterestUser>> { return; }

  /**
   * Get the authenticated user's followed boards.
   * @param fields {string} Optional fields separated by comma
   * @param limit {number} Optional limit, defaults to 100, maximum is 100.
   * @returns {Promise<Array<PinterestBoard>>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getMyFollowedBoards(fields?: string, limit?: number): Promise<Array<PinterestBoard>> { return; }

  /**
   * Get the authenticated user's followed interests.
   * @param fields {string} Optional fields separated by comma
   * @param limit {number} Optional limit, defaults to 100, maximum is 100.
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getMyFollowedInterests(fields?: string, limit?: number): Promise<any> { return; }

  /**
   * Get a user's profile.
   * @param username
   * @param fields
   * @returns {Promise<PinterestUser>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static getUser(username: string, fields?: string): Promise<PinterestUser> { return; }

  /**
   * Get a board's data.
   * @param boardId
   * @param fields
   * @returns {Promise<PinterestBoard>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static getBoard(boardId: string, fields?: string): Promise<PinterestBoard> { return; }

  /**
   * Get Pins of a specific board.
   * @param boardId {string} The ID of the board
   * @param fields {string} Optional fields separated by comma
   * @param limit {number} Optional limit, defaults to 100, maximum is 100.
   * @returns {Promise<Array<PinterestPin>>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static getBoardPins(boardId: string, fields?: string, limit?: number): Promise<Array<PinterestPin>> { return; }

  /**
   * Delete a board.
   * @param boardId {string} The ID of the board
   * @returns {Promise<PinterestUser>}
   */
  @Cordova()
  static deleteBoard(boardId: string): Promise<any> { return; }

  /**
   * Create a new board for the authenticated user.
   * @param name {string} Name of the board
   * @param desc {string} Optional description of the board
   * @returns {Promise<PinterestBoard>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  static createBoard(name: string, desc?: string): Promise<PinterestBoard> { return; }

  /**
   * Get a Pin by ID.
   * @param pinId {string} The ID of the Pin
   * @param fields {string} Optional fields separated by comma
   * @returns {Promise<PinterestPin>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static getPin(pinId: string, fields?: string): Promise<PinterestPin> { return; }

  /**
   * Deletes a pin
   * @param pinId {string} The ID of the pin
   * @returns {Promise<any>}
   */
  @Cordova()
  static deletePin(pinId: string): Promise<any> { return; }

  /**
   * Creates a Pin
   * @param note {string} Note/Description of the pin
   * @param boardId {string} Board ID to put the Pin under
   * @param imageUrl {string} URL of the image to share
   * @param link {string} Optional link to share
   * @returns {Promise<PinterestPin>}
   */
  @Cordova({
    successIndex: 4,
    errorIndex: 5
  })
  static createPin(note: string, boardId: string, imageUrl: string, link?: string): Promise<PinterestPin> { return; }

}
