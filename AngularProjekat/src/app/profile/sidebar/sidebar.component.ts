import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.clickOnLastUpdates();
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
