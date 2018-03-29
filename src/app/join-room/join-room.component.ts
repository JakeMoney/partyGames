import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {

  private roomCode: string;
  public playerName: string;

  constructor(private gameService: GameService) { }

  ngOnInit(): void { }

  joinRoom(e) {
    let data = {
      roomCode: this.roomCode,
      playerName: this.playerName
    }
    this.gameService.joinRoom(data);
  }

}