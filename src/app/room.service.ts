import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Room } from './models/room';
import { Player } from './models/player';

//"socket.io": "^2.0.4",
import * as io from 'socket.io-client';

enum RoomState {
  Home = 'Home', Create = 'Create', Join = 'Join', Wait = 'Wait', Started = 'Started'
}

@Injectable()
export class RoomService {

  public roomKey: string = 'room';
  public playerKey: string = 'player';

  private api_url: string = 'http://api.dev.partygames.profusiondev.net/';
  private socket: any;

  private player: Player;
  private room: Room;

  private roomState: RoomState = RoomState.Home;

  constructor(private http: Http) {

    this.socket = io.connect(this.api_url);

    this.player = new Player();
    if (sessionStorage.getItem(this.playerKey) !== null) {
      this.player = JSON.parse(sessionStorage.getItem(this.playerKey));
      console.log(this.room)
    }
    this.room = new Room();
    if (sessionStorage.getItem(this.roomKey) !== null) {
      this.room = JSON.parse(sessionStorage.getItem(this.roomKey));
      console.log(this.room)
    }

    this.socket.on('room.created', (room) => {
      console.log(room);

      // Store the room in the session
      this.room = room;
      sessionStorage.setItem(this.roomKey, JSON.stringify(room));

      // Store the updated player in the session
      let player = JSON.parse(sessionStorage.getItem(this.playerKey));
      player.id = room.creator;
      sessionStorage.setItem(this.playerKey, JSON.stringify(player));

      this.roomState = RoomState.Wait;
    })

    this.socket.on('room.joined', (room) => {
      console.log(room);

      // Store the room in the session
      this.room = room;
      sessionStorage.setItem(this.roomKey, JSON.stringify(this.room));

      // Set player id and store in session
      this.player.id = this.getPlayerId();
      sessionStorage.setItem(this.playerKey, JSON.stringify(this.player));

      this.roomState = RoomState.Wait;
    })

    this.socket.on('room.started', () => {
      console.log('room started!');
    })

    this.socket.on('error.created', (error) => {
      console.error(error);
    })
  }

  public create() {
    this.roomState = RoomState.Create;
  }
  
  public join() {
    this.roomState = RoomState.Join;
  }

  public cancel() {
    this.roomState = RoomState.Home;
  }

  public createRoom(data: any) {
    this.socket.emit('room.create', data);
    this.player.name = data.playerName;
    sessionStorage.setItem(this.playerKey, JSON.stringify(this.player));
  }

  public joinRoom(data: any) {
    this.socket.emit('room.join', data)
    this.player.name = data.playerName;
    sessionStorage.setItem(this.playerKey, JSON.stringify(this.player));
  }

  public startRoom() {
    this.socket.start('room.start');
  }

  private getPlayerId() {
    for (let p of this.room.players) {
      if (p.name === this.player.name) {
        return p.id;
      }
    }
    return '';
  }

  public getPlayer() {
    return this.player;
  }
  public getRoom() {
    return this.room;
  }
}