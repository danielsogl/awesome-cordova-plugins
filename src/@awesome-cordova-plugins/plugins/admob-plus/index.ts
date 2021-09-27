import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable, fromEvent } from 'rxjs';

export type AdUnitIDOption =
  | string
  | {
      android: string;
      ios: string;
    };

/**
 * @name AdMob Plus
 * @description
 * AdMob Plus is the successor of cordova-plugin-admob-free, which provides a cleaner API and build with modern tools.
 */
@Plugin({
  plugin: 'cordova-admob-plus',
  pluginName: 'AdMob',
  pluginRef: 'admob.banner',
  repo: 'https://github.com/admob-plus/admob-plus',
  platforms: ['Android', 'iOS'],
})
export class Banner {
  @Cordova({ otherPromise: true })
  hide(): Promise<any> {
    return Promise.resolve();
  }

  @Cordova({ otherPromise: true })
  show(opts: { id?: AdUnitIDOption }): Promise<any> {
    return Promise.resolve();
  }
}

@Plugin({
  plugin: 'cordova-admob-plus',
  pluginName: 'AdMob',
  pluginRef: 'admob.interstitial',
})
export class Interstitial {
  @Cordova({ otherPromise: true })
  load(opts: { id?: AdUnitIDOption }): Promise<any> {
    return Promise.resolve();
  }

  @Cordova({ otherPromise: true })
  show(): Promise<any> {
    return Promise.resolve();
  }
}

@Plugin({
  plugin: 'cordova-admob-plus',
  pluginName: 'AdMob',
  pluginRef: 'admob.rewardVideo',
})
export class RewardVideo {
  @Cordova({ otherPromise: true })
  load(opts: { id?: AdUnitIDOption }): Promise<any> {
    return Promise.resolve();
  }

  @Cordova({ otherPromise: true })
  show(): Promise<any> {
    return Promise.resolve();
  }
}

@Plugin({
  platforms: ['Android', 'iOS'],
  plugin: 'cordova-admob-plus',
  pluginName: 'AdMob',
  pluginRef: 'admob',
  repo: 'https://github.com/admob-plus/admob-plus',
})
@Injectable()
export class AdMob extends AwesomeCordovaNativePlugin {
  banner = new Banner();
  interstitial = new Interstitial();
  rewardVideo = new RewardVideo();

  @Cordova({ otherPromise: true })
  setAppMuted(value: boolean): Promise<any> {
    return Promise.resolve();
  }

  @Cordova({ otherPromise: true })
  setAppVolume(value: number): Promise<any> {
    return Promise.resolve();
  }

  @Cordova({ sync: true })
  setDevMode(value: boolean): void {
    return undefined;
  }

  on(event: string): Observable<any> {
    return fromEvent(document, event);
  }
}
