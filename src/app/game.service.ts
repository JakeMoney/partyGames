import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { IRoom } from './models/room';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

  private api_url = 'http://api.dev.partygames.profusiondev.net';

  constructor(private http: Http) { }

  createRoom(room: any, socket: any) {
    socket.emit('room.create', room);
  }

  public joinRoom(data: any, socket:any) {
    socket.emit('room.join', data)
  }

  public startRoom(socket: any) {
    socket.start('room.start');
  }

}