import { Injectable } from '@angular/core';
import {Http,RequestOptions,Jsonp} from '@angular/http'
import { query } from '@angular/core/src/animation/dsl';
import { Observable } from 'rxjs/Observable';
 import * as fetchJsonp from 'fetch-jsonp'
@Injectable()
export class FlickerService {

  constructor(private js:Jsonp) { }

   getSearchImages(query:string):any
   {
      const url="https://api.flickr.com/services/feeds/photos_public.gne";
      let rqop:RequestOptions=new RequestOptions({params:{"lang":"en-us","format":"json","tags":query}});
    
      const encodedQuery = encodeURIComponent( query );
     return  fetchJsonp(`https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags=${encodedQuery}`, 
         { jsonpCallback: 'jsoncallback' });
       
  
     
     
   }

}
