import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'last-updates-content',
  templateUrl: './last-updates-content.component.html',
  styleUrls: ['./last-updates-content.component.css']
})
export class LastUpdatesContentComponent implements OnInit {
  @Input() lastUpdated: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
