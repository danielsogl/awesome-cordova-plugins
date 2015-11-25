
import {promisify} from '../util';

let PLUGIN_REF = 'navigator.camera';

export class Camera {
  static getPicture = promisify(PLUGIN_REF, 'getPicture', 0, 1)
}
