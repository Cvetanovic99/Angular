import { Essay } from './../../models/essay';
import { Service } from './../../services/services';
import { Component, OnInit, Input, Output} from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { User } from 'src/app/models/user';

@Component({
  selector: 'write-essey-content',
  templateUrl: './write-essey-content.component.html',
  styleUrls: ['./write-essey-content.component.css']
})
export class WriteEsseyContentComponent implements OnInit {
  @Input() writeEssay: boolean;
  allTopics: Topic[];
  user: User;
  p: number = 1;
  p2: number = 1;
  essays: Essay [];
  currentTopic: Topic;
  date = new Date();
  essayForEdit: Essay = new Essay(1, 1, "", "", this.date);
  topicToDelete: Topic;
  essayToDelete: Essay;
  essaysToDelete: Essay [];

  constructor(private service: Service) { 
  }

  ngOnInit(): void {
    //this.essayForEdit.essayTopic = "";
    //this.essayForEdit.content = "";
    this.user = JSON.parse(localStorage.getItem('user'));
    this.service.getTopics(this.user.id).subscribe({
      next: topics => {
        this.allTopics = topics.reverse();
      },
      error: err => { console.log(err); }
    })
  }

  addNewTopic(newTitle: string, newDescription: string, btnCloseModal: HTMLButtonElement) {
    let today = new Date(); 
    let newTopic = {
      title: newTitle,
      userId: this.user.id,
      description: newDescription,
      date: today.getFullYear() + "-"+ today.getDate()+ "-" + today.getMonth()
    }

    this.service.postTopic(newTopic).subscribe(
      response => {
        //console.log(response);
        this.allTopics.splice(0, 0, response);
    });
    console.log(newTitle + newDescription);
    btnCloseModal.click();
    
  }

  writeCurrentTopic(topic: Topic) {
    this.currentTopic = topic;
  }

  showEssays(topic) {
    this.currentTopic = topic;
    this.service.getEssays(topic.id).subscribe({
      next: essays => {
        this.essays = essays.reverse();
      },
      error: err => { console.log(err); }
    })
  }

  addNewEssay(newTitle: string, newContent: string, btnCloseModal: HTMLButtonElement) {
    let today = new Date();
    let newEssay = {
      topicId: this.currentTopic.id,
      content: newContent,
      essayTopic: newTitle,
      date: today.getFullYear() + "-"+ today.getDate()+ "-" + today.getMonth()
    } 

    this.service.postEssay(newEssay).subscribe(
      response => {
        this.service.getEssays(this.currentTopic.id).subscribe({
          next: essays => {
            this.essays = essays.reverse();
          },
          error: err => { console.log(err); }
        })
        
      }
    );
  
    btnCloseModal.click();
  }

  editEssayFillModal(essay: Essay) {
    this.essayForEdit = essay;
  }

  editEssay(newTitle: string, newContent: string, btnCloseModal: HTMLButtonElement) {
    let today = new Date();
    let newEssay = {
      topicId: this.currentTopic.id,
      content: newContent,
      essayTopic: newTitle,
      date: today.getFullYear() + "-"+ today.getDate()+ "-" + today.getMonth()
    };

  this.service.putEssay(newEssay, this.essayForEdit.id).subscribe(
    response => {
      this.service.getEssays(this.currentTopic.id).subscribe({
        next: essays => {
          this.essays = essays.reverse();
        },
        error: err => { console.log(err); }
      });
    });
    btnCloseModal.click();
  }

  deleteTopic(item: Topic) {
    this.topicToDelete = item;
  }

  deleteEssay(item: Essay) {
    this.essayToDelete = item;
  }

  deleteForm(btnCloseModal: HTMLButtonElement) {
    if(this.deleteTopic != null) {
      this.service.deleteTopic(this.topicToDelete.id).subscribe(
        response => {

          this.service.getEssays(this.topicToDelete.id).subscribe({
            next: essays => {

              this.essaysToDelete = essays.reverse();
              if(this.essaysToDelete.length > 0) {

                this.service.deleteEssays(this.topicToDelete.id).subscribe(
                  response => {
                    console.log(response);
                  });
              };

              this.service.getTopics(this.user.id).subscribe({
                next: topics => {
                  this.allTopics = topics.reverse();
                },
                error: err => { console.log(err); }
              });

            },
            error: err => { console.log(err); }
          });
        });

        this.essays = null;
    } 
    else if(this.essayToDelete != null){
      this.service.deleteEssay(this.essayToDelete.id).subscribe(
        response => {
          console.log(response);
        });

        this.service.getEssays(this.currentTopic.id).subscribe({
          next: essays => {
            this.essays = essays.reverse();
          },
          error: err => { console.log(err); }
        }); 
    }
    btnCloseModal.click();
  }
}
