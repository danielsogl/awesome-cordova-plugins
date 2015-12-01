import {App, Platform} from 'ionic/ionic';
import {HomePage} from './home/home';
import './app.scss';

import {StatusBar} from 'ionic-native';

@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
    <ion-overlay></ion-overlay>
  `,
})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = HomePage;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.styleDefault();
    });
  }
}
