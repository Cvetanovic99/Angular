import { User } from './../models/user';
import { Service } from './../services/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  validData: boolean = true;
  constructor(private router: Router, private service: Service) { }

  user: User;
  ngOnInit(): void {
  }

  onBackButton() {
    this.router.navigate(['./main-page']);
  }

  logIn(username: string, password: string) {

    this.service.logIn(username, password);

    this.validData = this.service.isLogIn();

    console.log(this.validData);
    if(this.validData == true) {
      this.router.navigate(['./profile']);
    }
  }

  clickOnInput() {
    this.validData = true;
  }

}
