import { Service } from './../../services/services';
import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  responsiveNavbar: boolean = false;
  logedIn: boolean = false;
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private service: Service) { }

  ngOnInit(): void {
    this.logedIn = this.service.isLogIn();
    if(this.logedIn) {
      document.getElementsByClassName('header')[0].classList.add('header-logedIn');
    }

    this.clickOnLastUpdates();
  }

  navButtonClicked() {
    this.responsiveNavbar = !this.responsiveNavbar;
  }

  logOut() {
    this.logedIn = false;
    this.service.logOut();
    this.router.navigate(['./main-page']);
  }

  clickOnLastUpdates() {
    this.emitter.emit("lastUpdated");
  } 

  clickOnWriteEssay() {
    this.emitter.emit("writeEssay");
  }

  clickOnQuestions() {
    this.emitter.emit("questions");
  }

  clickOnFinance() {
    this.emitter.emit("finance");
  }

}
