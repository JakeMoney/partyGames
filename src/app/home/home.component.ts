import { Component, OnInit, Inject } from '@angular/core';
import { HomeService } from './home.service';
import { Api } from '../api';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CreateRoomDialogComponent } from '../dialogs/create-room-dialog/create-room-dialog.component';

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
    let hostName: string;
    const dialogRef = this.dialog.open(CreateRoomDialogComponent, {
      panelClass: 'create-room-dialog',
      data: {
        title: 'Creating ' + gameType + ' Room',
        actionText: 'Create',
        cancelActionText: 'Cancel',
        name: hostName,
      }
    });
    dialogRef.afterClosed().subscribe((data) => {
      hostName = data;
      if (data) {
        // TODO: Get room passcode from server
        const passCode = this.api.getPassCode();

        // Room params
        const navigationExtras: NavigationExtras = {
          queryParams: { gameType, passCode },
        };
        this.api.createRoom(gameType, passCode).subscribe((res) => {
          // console.log(res);
        });
        this.router.navigate(['/waitingRoom'], navigationExtras);
      }
    });
  }

  public joinRoom(gameType: string) {
    console.log('Joining: ' + gameType);

    // create matDialog
    // input: name
    // input: passcode

  }
}
