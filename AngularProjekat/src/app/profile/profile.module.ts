import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    ProfileComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent }
    ]),
    SharedModule
  ]
})
export class ProfileModule { }
