import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule } from './app-routing.module'
import { FriendService } from './services/friend.service'
import { AppComponent } from './app.component';
import { FriendlistComponent } from './friendlist/friendlist.component';


@NgModule({
  declarations: [
    AppComponent,
    FriendlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
