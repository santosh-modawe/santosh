  
import { Route } from '@angular/router'
import { FriendlistComponent } from '../friendlist/friendlist.component';

export const routes:Route[]=[
     {
        path:"",
        redirectTo:"/friendlist",
        pathMatch:"full"
     },
     {
         path:"friendlist",
         component:FriendlistComponent,
     }
     
    
]





