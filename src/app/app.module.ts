import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { Api } from './api';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';
import { GameSelectComponent } from './game-select/game-select.component';

import './rxjs-operators';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [Api],
  bootstrap: [AppComponent],
  entryComponents: []
})

export class AppModule { }