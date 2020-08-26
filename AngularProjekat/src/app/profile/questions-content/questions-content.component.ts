import { mergeMap, toArray } from 'rxjs/operators';
import { Answer } from './../../models/answer';
import { updateQuestion } from './../store/questions.actions';
import { selectQuestions } from './../store/index';
import { Observable } from 'rxjs';
import { User } from './../../models/user';
import { Question } from './../../models/question';
import { Service } from './../../services/services';
import { Component, OnInit, Input, Output } from '@angular/core';
import { State } from '../store';
import { Store, select } from "@ngrx/store";
import * as fromActions from "../store/questions.actions";
import { Update } from '@ngrx/entity';

@Component({
  selector: 'questions-content',
  templateUrl: './questions-content.component.html',
  styleUrls: ['./questions-content.component.css'],
})
export class QuestionsContentComponent implements OnInit {
  @Input() questions: boolean;
  allQuestions: Question [];
  user: User;
  questionsFromStore: Observable<Question []>;
  p: number = 1;
  panswers: number = 1;
  answers: Answer [];
  answerToEdit: Answer = new Answer(1,1,"",new Date());
  answerToDelete: Answer;
  answersToDelete: Answer [];
  currentQuestion: Question;
  questionToDelete: Question;
  

  constructor(private service: Service, private store: Store<State>) { }

  ngOnInit(): void {
    
    this.user = JSON.parse(localStorage.getItem('user'));
    this.store.dispatch(fromActions.loadQuestionss());
    this.loadQuestions();

    console.log(this.questionToDelete,this.answerToDelete)
  }

  loadQuestions() {

    this.questionsFromStore = this.store.pipe( select(selectQuestions) );

  }

  addNewQuestion(description: string, content: string, btnClose: HTMLButtonElement) {

    let date = new Date();

    let addQuestion = {
      id: undefined,
      userId: this.user.id,
      content: content,
      description: description,
      date: date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth()
    }

    this.store.dispatch(fromActions.addQuestion({ question: addQuestion}));
    btnClose.click();
  }

  editQuestion(content, description, id) {

    let date = new Date();

    let newQuestion = {
      id: parseInt(id),
      userId: this.user.id,
      content: content,
      description: description,
      date: date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth()
    }

    const updateQuestion: Update<Question> = {
      id: newQuestion.id,
      changes: newQuestion
    }

    this.store.dispatch(fromActions.updateQuestion({question: updateQuestion}))

  }

  deleteItem(btnCloseModal: HTMLButtonElement) {
    if(this.questionToDelete != null) {
      this.store.dispatch(fromActions.deleteQuestion({ id: this.questionToDelete.id }));

      this.service.getAnswers(this.questionToDelete.id).subscribe({
        next: answers => { 
          this.answersToDelete = answers;

          if(this.answersToDelete.length > 0) {
            this.service.deleteAnswers(this.questionToDelete.id).subscribe();
          }
        },
        error: err => console.log(err)
      })

      this.answers = null;
      btnCloseModal.click();
    } else if(this.answerToDelete != null) {

      this.service.deleteAnswer(this.answerToDelete.id).subscribe(
        response => {
          this.service.getAnswers(this.currentQuestion.id).subscribe({
            next: answers => { 
              this.answers = answers.reverse();
              btnCloseModal.click() 
            },
            error: err => console.log(err)
          })
        })
    }
  }

  showAnswers(question) {

    this.currentQuestion = question;

    this.service.getAnswers(question.id).subscribe({
      next: answers => this.answers = answers.reverse(),
      error: err => console.log(err)  
    })
  }

  writeDeleteQuestion(question) {
    this.questionToDelete = question;
    console.log(this.questionToDelete);
  }

  writeCurrentQuestion(question) {
    this.currentQuestion = question;
  }

  writeEditAnswer(answer) {
    this.answerToEdit = answer;
  }

  writeDeleteAnswer(answer) {
    this.answerToDelete = answer;
  }

  addAnswer(content: string, btnCloseModal: HTMLButtonElement) {
    let date = new Date();
    let newAnswer = {
      questionId: this.currentQuestion.id,
      content: content,
      date: date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth()
    }

    this.service.postAnswer(newAnswer).subscribe(
      response => {
        this.service.getAnswers(this.currentQuestion.id).subscribe({
          next: answers => this.answers = answers.reverse(),
          error: err => console.log(err)
        })
      }
    );

    btnCloseModal.click();
  }

  editAnswer(content: string, btnCloseModal: HTMLButtonElement) {

    let date = new Date();

    let newAnswer = {
      questionId: this.currentQuestion.id,
      content: content,
      date: date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth()
    }

    this.service.putAnswer(newAnswer, this.answerToEdit.id).subscribe(
      response => {
        this.service.getAnswers(this.currentQuestion.id).subscribe({
          next: answers => this.answers = answers.reverse(),
          error: err => console.log(err)
        })
      }
    );

    btnCloseModal.click();
  }

  itemsToDeleteNull() {
    this.questionToDelete = null;
    this.answerToDelete = null;
    console.log(this.questionToDelete, this.answerToDelete);
  }
}
