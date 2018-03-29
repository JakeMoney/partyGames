import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  public roomName: string;
  public playerName: string;

  constructor(private gameService: GameService) { }

  ngOnInit(): void { }

  createRoom(e) {
    let room = {
      roomName: this.roomName,
      playerName: this.playerName
    }
    this.gameService.createRoom(room);
  }

}