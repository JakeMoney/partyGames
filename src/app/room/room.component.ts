import { Component, OnInit, Inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  private roomCode: string;
  public roomName: string;
  public playerName: string;

  constructor(private router: Router,
              private gameService: GameService) { }

  ngOnInit() { }

  init(e, state) {
    switch(state) {
      case 'create':
        this.gameService.create();
        break;
      case 'join':
        this.gameService.join()
        break;
      default:
        break;
    }
  }

  createRoom(e) {
    let data = {
      roomName: this.roomName,
      playerName: this.playerName
    }
    this.gameService.createRoom(data);
  }

  joinRoom(e) {
    let data = {
      roomCode: this.roomCode,
      playerName: this.playerName
    }
    this.gameService.joinRoom(data);
  }

  startRoom(e) {
    this.gameService.startRoom();
  }

  cancel(e) {
    this.gameService.cancel();
    this.roomCode = "";
    this.roomName = "";
    this.playerName = "";
  }

  // Game endpoint calls
  chooseGame(e) {
    let data = {
      gameType: "fishbowl"
    }
    this.gameService.chooseGame(data);
  }

  cycleTeam(e) {
    this.gameService.cycleTeam();
  }

  beginGame(e) {
    this.gameService.beginGame();
  }

}