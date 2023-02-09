import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface VideoInformation {
  format: {
    bit_rate: string;
    duration: string;
    filename: string;
    format_name: string;
    nb_programs: string;
    nb_streams: string;
    probe_score: string;
    size: string;
    start_time: string;
  };
  [key: string]: any;
}

/**
 * @name FFMpeg
 * @description
 * Simple plugin that binds mobile ffmpeg to execute ffmpeg commands
 *
 * @usage
 * ```typescript
 * import { FFMpeg } from '@awesome-cordova-plugins/ffmpeg/ngx';
 *
 *
 * constructor(private ffMpeg: FFMpeg) { }
 *
 * ...
 *
 *
 * this.fFMpeg.exec('-i someinput.mp4 -vn -c:a copy out.mp3')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 * this.fFMpeg.probe('somefile.mp4"')
 *   .then((res: VideoInformation) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'FFMpeg',
  plugin: 'cordova-plugin-ffmpeg',
  pluginRef: 'ffmpeg',
  repo: 'https://github.com/MaximBelov/cordova-plugin-ffmpeg',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FFMpeg extends AwesomeCordovaNativePlugin {
  /**
   * Execute ffmpeg command
   * @param cmd {string} command
   * @return {Promise<any>} Returns a promise that resolves when execute finished
   */
  @Cordova()
  exec(cmd: string): Promise<any> {
    return;
  }

  /**
   * Extracts media information for the file specified with path
   * @param filePath {string} file path
   * @return {Promise<VideoInformation>} Returns a promise that resolves when media information received
   */
  @Cordova()
  probe(filePath: string): Promise<VideoInformation> {
    return;
  }
}
