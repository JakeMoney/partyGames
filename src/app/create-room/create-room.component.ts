import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  private api_url:string = 'http://api.dev.partygames.profusiondev.net/';
  private socket:any;

  public roomName: string;
  public playerName: string;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.socket = io.connect(this.api_url);

    this.socket.on('room.created', (room) => {
      console.log(room);
    })
  }

  createRoom(e) {
    let room = {
      roomName: this.roomName,
      playerName: this.playerName
    }
    this.gameService.createRoom(room, this.socket);
  }

}