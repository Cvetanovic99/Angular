import { User } from './../../models/user';
import { Service } from './../../services/services';
import { Topic } from './../../models/topic';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'last-updates-content',
  templateUrl: './last-updates-content.component.html',
  styleUrls: ['./last-updates-content.component.css']
})
export class LastUpdatesContentComponent implements OnInit {
  @Input() lastUpdated: boolean;
  lastTopics: Topic [];
  user: User;
  cards = [
    {
      ime: "Ime",
      prezime: "Prezime",
      treci: "Treci"
    },
    {
      ime: "Ime2",
      prezime: "Prezime2",
      treci: "Treci354"
    },
    {
      ime: "Ime3",
      prezime: "Prezime3",
      treci: "Treci354"
    }

]
  constructor(private service: Service) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.service.getTopics(this.user.id).subscribe({
      next: topics => {
        this.lastTopics = topics;
        //console.log(this.lastTopics);
      },
      error: err => { console.log(err); }
    });
  }

  addTopic() {
    let posting = {
      title: "Title",
      userId: 15,
      description: "Description",
      date: "2012-04-23T18:25:43.511Z"
    }
    this.service.postTopic(posting).subscribe(
      response => {
          console.log(response);
      });
  }

  updateTopics() {
    let posting = {
      title: "Title-354",
      userId: 15,
      description: "Description",
      date: "2012-04-23T18:25:43.511Z"
    }

    this.service.putTopic(posting,7).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
