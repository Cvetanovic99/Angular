import { Service } from './../../services/services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  responsiveNavbar: boolean = false;
  logedIn: boolean = false;
  user;
  constructor(private router: Router, private service: Service) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user != null) {
      this.logedIn = true;
    }
    else {
      this.logedIn = false;
    }
    if(this.logedIn) {
      document.getElementsByClassName('header')[0].classList.add('header-logedIn');
    }
  }

  navButtonClicked() {
    this.responsiveNavbar = !this.responsiveNavbar;
  }

  logOut() {
    this.logedIn = false;
    localStorage.removeItem('user');
    this.router.navigate(['./main-page']);
  }

}
