import { Component, OnInit, Inject } from '@angular/core';
import { HomeService } from './home.service';
import { Api } from '../api';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CreateRoomDialogComponent } from '../dialogs/create-room-dialog/create-room-dialog.component';
import { JoinRoomDialogComponent } from '../dialogs/join-room-dialog/join-room-dialog.component';

@Component({
  selector: 'app-home',
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private homeService: HomeService,
    private api: Api,
    private dialog: MatDialog) { }

  ngOnInit() { }

  public createRoom(gameType: string) {
    const dialogRef = this.dialog.open(CreateRoomDialogComponent, {
      panelClass: 'create-room-dialog',
      data: {
        title: 'Creating ' + gameType + ' Room',
        actionText: 'Create',
        cancelActionText: 'Cancel',
      }
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('createRoom(): ' + data);
        // TODO: Get room passcode from server
        // const passCode = this.api.getPassCode();
        // Room params
        // const navigationExtras: NavigationExtras = {
        //   queryParams: { gameType, passCode },
        // };
        // this.api.createRoom(gameType, passCode).subscribe((res) => {
        // });
        // this.router.navigate(['/waitingRoom'], navigationExtras);
      }
    });
  }

  public joinRoom(gameType: string) {
    const dialogRef = this.dialog.open(JoinRoomDialogComponent, {
      panelClass: 'create-room-dialog',
      data: {
        title: 'Joining ' + gameType + ' Room',
        actionText: 'Join',
        cancelActionText: 'Cancel',
      }
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('joinRoom(): ' + data);
        // TODO: make request to join room
        // this.api.joinRoom()
      }
    });
  }
}
