import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  lastUpdated: boolean;
  writeEssay: boolean;
  questions: boolean;
  finance: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onEmitt($event) {
    if($event == "lastUpdated"){
      this.lastUpdated = true; 
      this.writeEssay = false; 
      this.questions = false; 
      this.finance = false;
    } 
    else if ($event == "writeEssay") {
      this.lastUpdated = false; 
      this.writeEssay = true; 
      this.questions = false; 
      this.finance = false;
    }
    else if ($event == "questions") {
      this.lastUpdated = false; 
      this.writeEssay = false; 
      this.questions = true; 
      this.finance = false;
    }
    else if ($event == "finance") {
      this.lastUpdated = false; 
      this.writeEssay = false; 
      this.questions = false; 
      this.finance = true;
    }
  }

}
