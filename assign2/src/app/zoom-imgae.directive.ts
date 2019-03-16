import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { createElement } from '@angular/core/src/view/element';

@Directive({
  selector: '[appZoomImgae]'
})
export class ZoomImgaeDirective {
@Input() imgsrc:string;
  constructor(private el:ElementRef) { }
  @HostListener('click')
  imgClick(){
    let closebtn=document.createElement('div');
        closebtn.setAttribute("id","closebtn");
        closebtn.innerHTML="X";
    let img=document.createElement("img");
        img.setAttribute("src",this.imgsrc);

    let largeview=document.createElement('div');
        largeview.className='large-view';
        largeview.appendChild(img);

    let largeviewwrap=document.createElement("div");
        largeviewwrap.className='image-large-wrapper';
        largeviewwrap.appendChild(closebtn);
        largeviewwrap.appendChild(largeview);

        document.body.appendChild(largeviewwrap);

        document.addEventListener('click',function(e){
            if(e.target==closebtn)
            {
                largeviewwrap.remove();
            }
        })
        document.addEventListener("keydown",(event)=>{
        if (event.key === "Escape") {
            largeviewwrap.remove();
        }  
        })
    console.log(this.imgsrc);
  }
}
