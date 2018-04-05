import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  public cars: Array<string> = ["Saab", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW"];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void { 
    console.log(this.roomService.getPlayer());
  }

  startRoom(e) {
    this.roomService.startRoom();
  }

}