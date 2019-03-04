import { Component } from '@angular/core';
import * as dr from 'decimal-to-roman-converter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  roman_number:any="";
  decimal_number:any;
  converToRoman(){
      let dn=this.decimal_number;

    if(this.decimal_number.length)
    {
       try{
        this.roman_number=dr(parseInt(this.decimal_number));
       }catch(Exception){
         
        alert(Exception)
       }
      
    }else{
      this.roman_number="";
    }
    
    console.log(this.roman_number) 
  }
}
