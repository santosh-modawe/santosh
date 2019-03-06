import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FriendService } from '../services/friend.service';
import { Friend } from '../classes/Friend';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editfriend',
  templateUrl: './editfriend.component.html',
  styleUrls: ['./editfriend.component.css']
})
export class EditfriendComponent implements OnInit {

  
  fdata:Friend

  constructor(private fservice:FriendService,private rs:Router , private  ar:ActivatedRoute ) { }
   
  ngOnInit() {

    let friendid=this.ar.snapshot.paramMap.get("id")
   console.log(friendid)
    this.fdata=this.fservice.getFriendData(friendid);
     
  }
  editFriend(){
      
      if(this.fservice.editFriend(this.fdata))
       {  alert(" Update successfully")
          this.rs.navigate(['/friendlist'])
       }else{
         alert("Some thing went wrong");
       }
  }
}
