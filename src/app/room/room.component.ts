import { Component, OnInit, Inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RoomService } from '../room.service';

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
              private roomService: RoomService) { }

  ngOnInit() { }

  init(e, state) {
    switch(state) {
      case 'create':
        this.roomService.create();
        break;
      case 'join':
        this.roomService.join()
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
    this.roomService.createRoom(data);
  }

  joinRoom(e) {
    let data = {
      roomCode: this.roomCode,
      playerName: this.playerName
    }
    this.roomService.joinRoom(data);
  }

  startRoom(e) {
    this.roomService.startRoom();
  }

  cancel(e) {
    this.roomService.cancel();
  }
}