import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { GameService } from './game.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';
import { GameSelectComponent } from './game-select/game-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateRoomComponent,
    JoinRoomComponent,
    WaitingRoomComponent,
    GameSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
  entryComponents: []
})

export class AppModule { }