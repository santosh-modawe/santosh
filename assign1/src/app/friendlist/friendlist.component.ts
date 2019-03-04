import { Component, OnInit } from '@angular/core';
import { Friend } from '../classes/Friend';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  
  friendList:Friend[];
  constructor(private fs:FriendService) { }

  ngOnInit() {
    this.friendList=this.fs.getFriendList();
  }

}
