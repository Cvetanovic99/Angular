import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'write-essey-content',
  templateUrl: './write-essey-content.component.html',
  styleUrls: ['./write-essey-content.component.css']
})
export class WriteEsseyContentComponent implements OnInit {
  @Input() writeEssay: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
