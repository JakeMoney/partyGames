import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { IRoom } from './models/room';

import * as io from 'socket.io-client';

@Injectable()
export class GameService {

  private api_url: string = 'http://api.dev.partygames.profusiondev.net/';
  private socket: any;

  public room: any;

  constructor(private http: Http) {
    this.socket = io.connect(this.api_url);

    this.socket.on('room.created', (room) => {
      this.room = room;
      console.log(room);
    })

    this.socket.on('room.joined', (room) => {
      this.room = room;
      console.log(room);
    })
  }

  public createRoom(room: any) {
    this.socket.emit('room.create', room);
  }

  public joinRoom(data: any) {
    this.socket.emit('room.join', data)
  }

  public startRoom() {
    this.socket.start('room.start');
  }

}