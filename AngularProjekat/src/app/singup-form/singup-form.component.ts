import { Service } from './../services/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit {

  constructor(private router: Router, private service: Service) { }

  ngOnInit(): void {
  }

  onBackButton() {
    this.router.navigate(['./main-page']);
  }

  singUp(value) {

    this.service.singUp(value);
    console.log(value);
  }

}
