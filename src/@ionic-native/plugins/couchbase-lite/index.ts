import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { CouchbaseLite } from '@ionic-native/couchbase-lite';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LocalDatabaseService{
  url:string;
  constructor(
        private couchbase: CouchbaseLite,
        private platform:Platform,
        private _http:Http){
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
  //   DATABASE RELATED METHODS
  createDatabase(database_name:string){
    let url = this.getUrl();
    let urlWithDatabaseName = url+database_name;
    return this._http
        .put(url)
        .map(data => {this.results = data['results']})
        .catch((error:any) =>{
            return Observable.throw(error.json() || 'Couchbase Lite error');
        })
  }
}
