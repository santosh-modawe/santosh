import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import {  routes } from './classes/routelist'
 const routelist:Routes=routes;
@NgModule({
  imports: [
    RouterModule.forRoot(routelist)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
