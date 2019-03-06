import { Component, OnInit } from '@angular/core';
import { Friend } from '../classes/Friend';
import { FriendService } from '../services/friend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  
  friendList:Friend[];
  constructor(private fs:FriendService,private rt:Router) { }

  ngOnInit() {
    this.friendList=this.fs.getFriendList();
  }

  
  deleteFriend(friend:Friend){
    if(confirm("Do you want to delete it ?"))
    {
        if( this.fs.deleteFriend(friend) )
        {
          this.rt.navigate(['/friendlist']);
        }else{
          alert("Something went wrong")
        }
    } 
}

}
