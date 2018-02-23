import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IRoom } from './models/room';
import 'rxjs/add/observable/of';

@Injectable()
export class Api {

  private apiUrl: string;

  constructor( private http: HttpClient ) {
    this.apiUrl = 'some.url.here';
  }

  public getPassCode() {
    // const url = this.apiUrl + '/passCode/';
    // return this.http.get(url).subscribe((value) => {
    //   console.log(value);
    // });
    return Math.random().toString(36).substr(2, 5);
  }

  public createRoom(gameType: string, passCode: string): Observable<IRoom> {
    // const url = this.apiUrl + '/createRoom/';
    // return this.http.post(url);

    return Observable.of({
      id: '1',
      hostId: '1',
      gameType: 'fishbowl',
      passCode: '12345',
    });
  }

  public joinRoom(gameType: string, passCode: string) {
    throw new Error('Method not implemented.');
  }
}
