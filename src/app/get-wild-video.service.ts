import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GetWildVideo } from "./get-wild-video";

@Injectable()
export class GetWildVideoService {

  constructor(private http: Http) { }

  fetch(): Observable<[GetWildVideo]> {
    return this.http
      .get('https://www.googleapis.com/youtube/v3/search?part=snippet' +
          '&q=getwild'+
          '&maxResults=50' +
          '&type=video' +
          '&key=AIzaSyBCNRuekHS5rOHBeoNCaWBmBHoFfsxQDvM')
      .map(response => response.json())
  }
}
