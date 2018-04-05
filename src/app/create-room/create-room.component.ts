import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  public roomName: string;
  public playerName: string;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void { }

  createRoom(e) {
    let data = {
      roomName: this.roomName,
      playerName: this.playerName
    }
    this.roomService.createRoom(data);
  }

}