import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { RoomService } from './room.service';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent],
  entryComponents: []
})

export class AppModule { }