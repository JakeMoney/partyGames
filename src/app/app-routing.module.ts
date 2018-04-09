import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';
import { GameSelectComponent } from './game-select/game-select.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Create',
    component: CreateRoomComponent,
  },
  {
    path: 'Join',
    component: JoinRoomComponent,
  },
  {
    path: 'Party',
    component: WaitingRoomComponent,
  },
  {
    path: 'Games',
    component: GameSelectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }