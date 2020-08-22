import { Service } from './../services/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.service.logOut();
  }

}
