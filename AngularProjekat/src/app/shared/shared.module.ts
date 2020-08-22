import { Service } from './../services/services';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    NavbarComponent
  ],
  providers: [
    Service
  ]
})
export class SharedModule { }
