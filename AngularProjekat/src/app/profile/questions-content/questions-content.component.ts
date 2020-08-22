import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'questions-content',
  templateUrl: './questions-content.component.html',
  styleUrls: ['./questions-content.component.css']
})
export class QuestionsContentComponent implements OnInit {
  @Input() questions: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
