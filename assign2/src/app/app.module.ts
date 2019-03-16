import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpModule , JsonpModule } from '@angular/http'
import  { FlickerService } from '../services/flicker.service'
import { AppComponent } from './app.component';
import { ZoomImgaeDirective } from './zoom-imgae.directive';


@NgModule({
  declarations: [
    AppComponent,
    ZoomImgaeDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [FlickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
