  
import { Route } from '@angular/router'
import { FriendlistComponent } from '../friendlist/friendlist.component';
import { AddfriendComponent } from '../addfriend/addfriend.component';
import { EditfriendComponent } from '../editfriend/editfriend.component';

export const routes:Route[]=[
     {
        path:"",
        redirectTo:"/friendlist",
        pathMatch:"full"
     },
     {
         path:"friendlist",
         component:FriendlistComponent,
     },
     {
         path:"addfriend",
         component:AddfriendComponent
     },
     {
        path:"editfriend/:id",
        component:EditfriendComponent
    }
    
     
    
]





