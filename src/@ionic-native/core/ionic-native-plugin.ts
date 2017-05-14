export class IonicNativePlugin {

  private static _class: any;

  [key: string]: any;

  /**
   * Returns a boolean that indicates whether the plugin is installed
   * @return {boolean}
   */
  static installed(): boolean { return; }

  /**
   * Returns the original plugin object
   */
  static getPlugin(): any { return; }

  /**
   * Returns the plugin's name
   */
  static getPluginName(): string { return; }

  /**
   * Returns the plugin's reference
   */
  static getPluginRef(): string { return; }

  /**
   * Returns the plugin's install name
   */
  static getPluginInstallName(): string { return; }

  static useClass(_class: any): void {


    if (!_class || !_class.prototype) return;


    for (let prop in _class.prototype) {
      this.prototype[prop] = _class.prototype[prop];
    }

    this._class = _class;

  }

  useClass(_class: any): void {

    if (!_class || !_class.prototype) return;

    for (let prop in _class.prototype) {
      this[prop] = _class.prototype[prop];
    }

  }

}
