import { Service } from './services/services';
import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SliderComponent } from './main-page/slider/slider.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SingupFormComponent } from './singup-form/singup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SliderComponent,
    LoginFormComponent,
    SingupFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'main-page', component: MainPageComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'singup', component: SingupFormComponent },
      { path: '', redirectTo: 'main-page', pathMatch: 'full' },
      { path: '**', redirectTo: 'main-page', pathMatch: 'full' }
    ]),
    ProfileModule,
    SharedModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
