import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule } from './app-routing.module'
import { FriendService } from './services/friend.service'
import { AppComponent } from './app.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { FormsModule }   from '@angular/forms';
import { EditfriendComponent } from './editfriend/editfriend.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendlistComponent,
    AddfriendComponent,
    EditfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
