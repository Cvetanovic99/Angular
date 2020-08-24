import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LastUpdatesContentComponent } from './last-updates-content/last-updates-content.component';
import { WriteEsseyContentComponent } from './write-essey-content/write-essey-content.component';
import { QuestionsContentComponent } from './questions-content/questions-content.component';
import { FinansicContentComponent } from './finansic-content/finansic-content.component';



@NgModule({
  declarations: [
    ProfileComponent,
    SidebarComponent,
    LastUpdatesContentComponent,
    WriteEsseyContentComponent,
    QuestionsContentComponent,
    FinansicContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent },
      { path: 'content-last-updates', component: LastUpdatesContentComponent }
    ]),
    SharedModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
