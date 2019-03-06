import { Injectable } from '@angular/core';
import {Friend} from '../classes/Friend'
@Injectable()
export class FriendService {
  
  FriendList:Friend[]=[
    { 
      id:101,
      name:"santosh",
      email:"santosh@gmail.com",
      address:"Hinjewadi"

    },
    { 
      id:102,
      name:"Shivdas",
      email:"Shivdas@gmail.com",
      address:"Warje"

    },
    { 
      id:103,
      name:"Aditya",
      email:"aditya@gmail.com",
      address:"katraj"

    }
  ]
  constructor() { }

    getFriendList():Friend[]{
        return this.FriendList
    }
    getFriendData(id):Friend{
      let data:Friend
        for(let i in this.FriendList)
        {
             if (this.FriendList[i].id==id){
              data=this.FriendList[i];
               break;
             }
        }
        return data;
    }
   
    addNewFriend(newFriend:Friend):Boolean{
       this.FriendList.splice(0,0,newFriend)
       return true;
    }
   
    editFriend(newFriend:Friend):Boolean
    {   let flag=false;
        this.FriendList.forEach((friend,index)=>{
            if(friend.id==newFriend.id)
            {  flag=true;
             // this.FriendList[index]=newFriend;
              this.FriendList.splice(index,1);
              this.FriendList.splice(0,0,newFriend)
             return 0;
            }
        })
        if(!flag)
        {
          return false;
        }else{
          return true;
        }

    }

    deleteFriend(df:Friend)
    {
      let flag=false;
        this.FriendList.forEach((friend,index)=>{
            if(df.id==friend.id)
            {  flag=true;
             // this.FriendList[index]=newFriend;
              this.FriendList.splice(index,1);
            
             return 0;
            }
        })
        if(!flag)
        {
          return false;
        }else{
          return true;
        }

    }
    

}
