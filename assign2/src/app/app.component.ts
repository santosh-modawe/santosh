import { Component } from '@angular/core';
import { FlickerService } from '../services/flicker.service';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  search:""
  searchResult:any;
   constructor(private fliker:FlickerService)
   { 

 

   }
   searchMedia(){
    let that=this;
     setTimeout(function(){
       if(that.search.length>=3)
       {
        that.searchResult=that.fliker.getSearchImages(that.search)
        .then(function(response) {
              
          return response.json()
       }).
        then(function(response){
          that.searchResult=response.items;
          console.log(that.searchResult)
        })
      }else{
        this.searchResult=[];
      }
       },10);
    }
   
    
  
}
