import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'finansic-content',
  templateUrl: './finansic-content.component.html',
  styleUrls: ['./finansic-content.component.css']
})
export class FinansicContentComponent implements OnInit {
  @Input() finance: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
