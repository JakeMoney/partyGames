import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { Api } from './api';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';
import { CreateRoomDialogComponent } from './dialogs/create-room-dialog/create-room-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateRoomComponent,
    WaitingRoomComponent,
    CreateRoomDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [Api],
  bootstrap: [AppComponent],
  entryComponents: [CreateRoomDialogComponent]
})
export class AppModule { }
