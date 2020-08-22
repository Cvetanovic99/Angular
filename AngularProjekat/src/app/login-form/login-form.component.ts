import { Service } from './../services/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private service: Service) { }
  user = {
    name: "Ime",
    surname: "Prezime",
    password: "Sifra"
  };

  ngOnInit(): void {
  }

  onBackButton() {
    this.router.navigate(['./main-page']);
  }

  logIn() {
    this.service.logIn();
    this.router.navigate(['./profile']);
  }

}
