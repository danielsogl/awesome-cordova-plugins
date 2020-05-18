import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name SSH Connect
 * @description
 * Cordova plugin to make connections and execute commands through SSH
 *
 * @usage
 * ```typescript
 * import { SSHConnect } from '@ionic-native/ssh-connect/ngx';
 *
 *
 * constructor(private sshConnect: SSHConnect) { }
 *
 * ...
 *
 *
 * this.sshConnect.connect('user', 'password', 'host', port)
 *   .then(resp => console.log(resp))
 *   .catch(error => console.error(error));
 *
 * this.sshConnect.executeCommand('command')
 *   .then(resp => console.log(resp))
 *   .catch(error => console.error(error));
 *
 * this.sshConnect.disconnect()
 *   .then(resp => console.log(resp))
 *   .catch(error => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'SSHConnect',
  plugin: 'cordova-plugin-ssh-connect',
  pluginRef: 'cordova.plugins.sshConnect',
  repo: 'https://github.com/JosePerez27/cordova-plugin-ssh-connect',
  platforms: ['Android'],
})
@Injectable()
export class SSHConnect extends IonicNativePlugin {
  /**
   * Establish a remote ssh connection
   * @param {user} user  The remote host user
   * @param {password} password  The remote host password
   * @param {host} host  The remote device to connect
   * @param {port} port  The SSH port for connection (usually port 22)
   * @return {Promise<any>} Returns an promise that resolves with the success of the connection
   */
  @Cordova()
  connect(user: string, password: string, host: string, port: number): Promise<any> {
    return;
  }

  /**
   * Execute a command on the remote host connected by ssh
   * @param {command} command  The command to execute
   * @return {Promise<any>} Returns an promise that resolves with the printed text on the remote console
   */
  @Cordova()
  executeCommand(command: string): Promise<any> {
    return;
  }

  /**
   * Disconnect the SSH session
   * @return {Promise<any>} Returns an promise that resolves with the success of the disconnection
   */
  @Cordova()
  disconnect(): Promise<any> {
    return;
  }
}
