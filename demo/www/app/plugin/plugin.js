import {Page, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'app/plugin/plugin.html',
})
export class Plugin {
  constructor(params: NavParams) {

    this.plugin = params.get('plugin');
    console.log('Plugin', this.plugin);

    this.methods = Object.keys(this.plugin).filter((k) => {
      if(typeof this.plugin[k] === 'function') {
        return true;
      }
      return false;
    });
  }

  doMethod(method) {
    console.log('Doing method', method, 'on Plugin', this.plugin);
  }

}
