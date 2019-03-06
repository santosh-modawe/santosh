import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { FormGroup } from '@angular/forms';
import { Friend } from '../classes/Friend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {

  constructor(private fservice:FriendService,private rt:Router) { }

  ngOnInit() {
  }

  addNewFriend(form:FormGroup){
     console.log(form)

     
    let newfriend:Friend={
      id:this.fservice.FriendList.length+1,
      name:form.value.fname,
      email:form.value.femail,
      address:form.value.faddress  
   }
    if(this.fservice.addNewFriend(newfriend))
    { 
       
      alert("New friend added succefully")
      this.rt.navigate(['/friendlist']);

    }else{
      alert("Something went wrong")
    }   
  }


}
