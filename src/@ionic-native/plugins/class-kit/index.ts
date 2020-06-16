import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface CCKContext {
  /**
   * Full identifier path from root, including the context identifier itself..
   */
  identifierPath: string[];
  /**
   * Title of the context.
   */
  title: string;
  /**
   * Optional. Type value for the context.
   */
  type?: CCKContextType;
  /**
   * Optional. Topic value of the context.
   */
  topic?: string;
  /**
   * Optional. Display order of the context.
   */
  displayOrder?: number;
}

export enum CCKContextType {
  none = 0,
  app,
  chapter,
  section,
  level,
  page,
  task,
  challenge,
  quiz,
  exercise,
  lesson,
  book,
  game,
  document,
  audio,
  video,
}

export enum CCKContextTopic {
  math = 'math',
  science = 'science',
  literacyAndWriting = 'literacyAndWriting',
  worldLanguage = 'worldLanguage',
  socialScience = 'socialScience',
  computerScienceAndEngineering = 'computerScienceAndEngineering',
  artsAndMusic = 'artsAndMusic',
  healthAndFitness = 'healthAndFitness',
}

export interface CCKBinaryItem {
  /**
   * A unique string identifier for the activity item.
   */
  identifier: string;
  /**
   * A human readable name for the activity item.
   */
  title: string;
  /**
   * A type value for the activity item.
   */
  type: CCKBinaryType;
  /**
   * The value that the binary activity item takes.
   */
  isCorrect: boolean;
  /**
   * Optional. Should the activity item be added as the primary activity item.
   */
  isPrimaryActivityItem?: boolean;
}

export enum CCKBinaryType {
  trueFalse = 0,
  passFail,
  yesNo,
}

export interface CCKScoreItem {
  /**
   * A unique string identifier for the activity item.
   */
  identifier: string;
  /**
   * A human readable name for the activity item.
   */
  title: string;
  /**
   * The score earned during completion of a task.
   */
  score: number;
  /**
   * The maximum possible score, against which the reported score should be judged.
   */
  maxScore: number;
  /**
   * Optional. Should the activity item be added as the primary activity item.
   */
  isPrimaryActivityItem?: boolean;
}

export interface CCKQuantityItem {
  /**
   * A unique string identifier for the activity item.
   */
  identifier: string;
  /**
   * A human readable name for the activity item.
   */
  title: string;
  /**
   * A quantity associated with the task.
   */
  quantity: number;
  /**
   * Optional. Should the activity item be added as the primary activity item.
   */
  isPrimaryActivityItem?: boolean;
}

/**
 * @name Class Kit
 * @description Plugin for using Apple's ClassKit framework.
 *
 *
 * Prerequisites:
 * Only works with Xcode 9.4 and iOS 11.4. Your Provisioning Profile must include the ClassKit capability. Read more about how to Request ClassKit Resources (https://developer.apple.com/contact/classkit/) in here: https://developer.apple.com/documentation/classkit/enabling_classkit_in_your_app.
 * Also note that you can’t test ClassKit behavior in Simulator because Schoolwork isn’t available in that environment.
 *
 * @usage
 * ```typescript
 * import { ClassKit, CCKContext, CCKBinaryItem, CCKQuantityItem, CCKScoreItem, CCKContextTopic, CCKContextType, CCKBinaryType } from '@ionic-native/class-kit/ngx';
 *
 * // Init contexts defined in XML file 'CCK-contexts.xml'
 * constructor( ..., private classKit: ClassKit) {
 *   platform.ready().then(() => {
 *     classKit.initContextsFromXml("classkitplugin://")
 *       .then(() => console.log("success"))
 *       .catch(e => console.log("error: ", e));
 *   });
 * }
 *
 * ...
 *
 * // Init context with identifier path
 * const context: CCKContext = {
 *   identifierPath: ["parent_title_one", "child_one", "child_one_correct_quiz"],
 *   title: "child one correct quiz",
 *   type: CCKContextType.exercise,
 *   topic: CCKContextTopic.science,
 *   displayOrder: 0
 * };
 *
 * this.classKit.addContext("classkitplugin://", context)
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 *
 * // Remove all contexts
 * this.classKit.removeContexts()
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 *
 * // Remove context with identifier path
 * this.classKit.removeContext(["parent_title_one", "child_one", "child_one_correct_quiz"])
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 *
 * // Begin a new activity or restart an activity for a given context
 * this.classKit.beginActivity(["parent_title_one", "child_two", "child_two_quiz"], false)
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 *
 * // Adds a progress range to the active given activity
 * this.classKit.setProgressRange(0, 0.66)
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 *
 * // Adds a progress to the active given activity
 * this.classKit.setProgress(0.66)
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 *
 * // Adds activity information that is true or false, pass or fail, yes or no
 * const binaryItem: CCKBinaryItem = {
 *   identifier: "child_two_quiz_IDENTIFIER_1",
 *   title: "CHILD TWO QUIZ 1",
 *   type: CCKBinaryType.trueFalse,
 *   isCorrect: isCorrect,
 *   isPrimaryActivityItem: false
 * };
 *
 * this.classKit.setBinaryItem(binaryItem)
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 *
 * // Adds activity information that signifies a score out of a possible maximum
 * const scoreItem: CCKScoreItem = {
 *   identifier: "total_score",
 *   title: "Total Score :-)",
 *   score: 0.66,
 *   maxScore: 1.0,
 *   isPrimaryActivityItem: true
 * };
 *
 * this.classKit.setScoreItem(scoreItem)
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 *
 * // Activity information that signifies a quantity
 * const quantityItem: CCKQuantityItem = {
 *    identifier: "quantity_item_hints",
 *    title: "Hints",
 *    quantity: 12,
 *    isPrimaryActivityItem: false
 * };
 *
 * this.classKit.setQuantityItem(quantityItem)
 *    .then(() => console.log("success"))
 *    .catch(e => console.log("error: ", e));
 *
 * ```
 *
 * @interfaces
 * CCKContext
 * CCKContextType
 * CCKContextTopic
 * CCKBinaryItem
 * CCKBinaryType
 * CCKScoreItem
 * CCKQuantityItem
 */
@Plugin({
  pluginName: 'ClassKit',
  plugin: 'cordova-plugin-classkit',
  pluginRef: 'CordovaClassKit',
  repo: 'https://github.com/sebastianbaar/cordova-plugin-classkit.git',
  platforms: ['iOS'],
})
@Injectable()
export class ClassKit extends IonicNativePlugin {
  /**
   * Init contexts defined in XML file 'CCK-contexts.xml'
   * @param {string} urlPrefix URL prefix to use for custom URLs to locate activities (deeplink).
   * @return {Promise<any>}
   */
  @Cordova()
  initContextsFromXml(urlPrefix: string): Promise<any> {
    return;
  }

  /**
   * Init context with identifier path
   * @param {string} urlPrefix URL prefix to use for custom URLs to locate activities (deeplink).
   * @param {CCKContext} context Context to initialize.
   * @return {Promise<any>}
   */
  @Cordova()
  addContext(urlPrefix: string, context: CCKContext): Promise<any> {
    return;
  }

  /**
   * Remove all contexts
   * @return {Promise<any>}
   */
  @Cordova()
  removeContexts(): Promise<any> {
    return;
  }

  /**
   * Remove context with identifier path
   * @param {string[]} identifierPath Full identifier path from root, including the context identifier itself.
   * @return {Promise<any>}
   */
  @Cordova()
  removeContext(identifierPath: string[]): Promise<any> {
    return;
  }

  /**
   * Begin a new activity or restart an activity for a given context
   * @param {string[]} identifierPath Full identifier path from root, including the context identifier itself.
   * @param {boolean} asNew Should a new activity be created (or an old activity be restarted).
   * @return {Promise<any>}
   */
  @Cordova()
  beginActivity(identifierPath: string[], asNew: boolean): Promise<any> {
    return;
  }

  /**
   * End the active activity
   * @return {Promise<any>}
   */
  @Cordova()
  endActivity(): Promise<any> {
    return;
  }

  /**
   * Adds a progress range to the active given activity
   * @param {number} fromStart The beginning of the new range to add. This should be fractional value between 0 and 1, inclusive.
   * @param {number} toEnd The end of the new range to add. This should be larger than the start value and less than or equal to one.
   * @return {Promise<any>}
   */
  @Cordova()
  setProgressRange(fromStart: number, toEnd: number): Promise<any> {
    return;
  }

  /**
   * Adds a progress to the active given activity
   * @param {number} progress A measure of progress through the task, given as a fraction in the range [0, 1].
   * @return {Promise<any>}
   */
  @Cordova()
  setProgress(progress: number): Promise<any> {
    return;
  }

  /**
   * Adds activity information that is true or false, pass or fail, yes or no
   * @param {CCKBinaryItem} binaryItem The binary item to add to the activity.
   * @return {Promise<any>}
   */
  @Cordova()
  setBinaryItem(binaryItem: CCKBinaryItem): Promise<any> {
    return;
  }

  /**
   * Adds activity information that signifies a score out of a possible maximum
   * @param {CCKScoreItem} scoreItem The score item to add to the activity.
   * @return {Promise<any>}
   */
  @Cordova()
  setScoreItem(scoreItem: CCKScoreItem): Promise<any> {
    return;
  }

  /**
   * Activity information that signifies a quantity.
   * @param {CCKQuantityItem} quantityItem The quantity item to add to the activity.
   * @return {Promise<any>}
   */
  @Cordova()
  setQuantityItem(quantityItem: CCKQuantityItem): Promise<any> {
    return;
  }
}
