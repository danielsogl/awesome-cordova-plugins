import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { CouchbaseLite } from '@ionic-native/couchbase-lite';
@Injectable()
export class LocalDatabaseService{
  url:string;
  constructor(
        private couchbase: CouchbaseLite,
        private platform:Platform){
            this.initMethode();
  }
  initMethode(){
    this.couchbase.getURL().then((url)=>{
        this.url = url;
    })
  }
  getUrl(){
    return this.url;
  }
}
