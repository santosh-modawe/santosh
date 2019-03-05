  
import { Route } from '@angular/router'
import { FriendlistComponent } from '../friendlist/friendlist.component';
import { AddfriendComponent } from '../addfriend/addfriend.component';

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
     }
     
    
]





