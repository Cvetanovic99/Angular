import { Service } from './../services/services';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseArrayPipe } from './reverse-array.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    ReverseArrayPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    NavbarComponent,
    ReverseArrayPipe
  ],
  providers: [
    Service
  ]
})
export class SharedModule { }
