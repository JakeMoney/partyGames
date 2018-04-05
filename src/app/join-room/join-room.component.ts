import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {

  private roomCode: string;
  public playerName: string;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void { }

  joinRoom(e) {
    let data = {
      roomCode: this.roomCode,
      playerName: this.playerName
    }
    this.roomService.joinRoom(data);
  }

}