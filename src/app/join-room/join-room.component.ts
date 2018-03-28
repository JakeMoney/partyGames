import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {

  private api_url:string = 'http://api.dev.partygames.profusiondev.net/';
  private socket: any;

  private roomCode: string;
  public playerName: string;

  constructor(private gameService: GameService) { }

  ngOnInit(): void { 
    this.socket = io.connect(this.api_url);

    this.socket.on('room.joined', (room) => {
      console.log(room);
    })
  }

  joinRoom(e) {
    let data = {
      roomCode: this.roomCode,
      playerName: this.playerName
    }
    this.gameService.joinRoom(data, this.socket);
  }

}