import { Answer } from './../models/answer';
import { Essay } from './../models/essay';
import { Question } from './../models/question';
import { Topic } from './../models/topic';
import { Injectable } from '@angular/core' 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable()

export class Service {
    users: User [];
    user: User;
  constructor(private http: HttpClient) {

    this.getUsers().subscribe({
      next: users => { this.users = users; },
      error: err => console.log(err)     
    });

  }

  isLogIn(): boolean{
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user != null)
      return true;
    else 
      return false;
  }

  logIn(username: string, password: string) {

        this.users.forEach(user => {
          if(user.username === username){
            if(user.password === password){
              console.log(user);
              localStorage.setItem('user', JSON.stringify(user));
            }
          }
        });
  }

  logOut() {
    localStorage.removeItem('user');
  }

//Service for user
  getUsers(): Observable<User []> {
    return this.http.get<User []>("http://localhost:3000/users").pipe(
      catchError(this.handleError)
    )
  }
//Service for topics
  getTopics(userId: number): Observable<Topic[]> {
    return this.http.get<Topic[]>("http://localhost:3000/topics?userId=" + userId).pipe(
      //tap(data => console.log(`All data ${data}`)),
      catchError(this.handleError)
    );
  }

  postTopic(topic: any): Observable<Topic> {
    return this.http.post<Topic>("http://localhost:3000/topics", topic).pipe(
      catchError(this.handleError)
    )
  }

  putTopic(topic: any, id: number): Observable<Topic> {
    return this.http.put<Topic>("http://localhost:3000/topics"+"/"+id,topic).pipe(
      catchError(this.handleError)
    )
  }

  deleteTopic(id: number): Observable<Topic> {
    return this.http.delete<Topic>("http://localhost:3000/topics"+"/"+id).pipe(
      catchError(this.handleError)
    )
  }

//Service for questions
  getQuestions(userId: number): Observable<Question[]> {
    return this.http.get<Question[]>("http://localhost:3000/questions?userId=" + userId).pipe(
      //tap(data => console.log(`All data ${data}`)),
      catchError(this.handleError)
    );
  }

  postQuestion(question: any): Observable<Question> {
    return this.http.post<Question>("http://localhost:3000/questions", question).pipe(
      catchError(this.handleError)
    )
  }

  putQuestion(question: Partial<Question>, id: number): Observable<Question> {
    return this.http.put<Question>("http://localhost:3000/questions"+"/"+id, question).pipe(
      catchError(this.handleError)
    )
  }

  deleteQuestion(id: number): Observable<Question> {
    return this.http.delete<Question>("http://localhost:3000/questions"+"/"+id).pipe(
      catchError(this.handleError)
    )
  }

//Service for essays
  getEssays(topicId: number): Observable<Essay []> {
    return this.http.get<Essay []>("http://localhost:3000/essays?topicId=" + topicId).pipe(
      //tap(data => console.log(`All data ${data}`)),
      catchError(this.handleError)
    );
  }

  postEssay(essay: any): Observable<Essay> {
    return this.http.post<Essay>("http://localhost:3000/essays", essay).pipe(
      catchError(this.handleError)
    )
  }

  putEssay(essay: any, id: number): Observable<Essay> {
    return this.http.put<Essay>("http://localhost:3000/essays"+"/"+id, essay).pipe(
      catchError(this.handleError)
    )
  }

  deleteEssay(id: number): Observable<Essay> {
    return this.http.delete<Essay>("http://localhost:3000/essays"+"/"+id).pipe(
      catchError(this.handleError)
    )
  }

  deleteEssays(topicId: number): Observable<Essay []> {
    return this.http.delete<Essay []>("http://localhost:3000/essays?topicId="+topicId).pipe(
      catchError(this.handleError)
    )
  }

//Service for answers
  getAnswers(questionId: number): Observable<Answer []> {
    return this.http.get<Answer []>("http://localhost:3000/answers?questionId=" + questionId).pipe(
      //tap(data => console.log(`All data ${data}`)),
      catchError(this.handleError)
    );
  }

  postAnswer(answer: any): Observable<Answer> {
    return this.http.post<Answer>("http://localhost:3000/answers", answer).pipe(
      catchError(this.handleError)
    )
  }

  putAnswer(answer: any, id: number): Observable<Answer> {
    return this.http.put<Answer>("http://localhost:3000/answers"+"/"+id, answer).pipe(
      catchError(this.handleError)
    )
  }

  deleteAnswer(id: number): Observable<Answer> {
    return this.http.delete<Answer>("http://localhost:3000/answers"+"/"+id).pipe(
      catchError(this.handleError)
    )
  }

  deleteAnswers(questionId: number): Observable<Answer []> {
    return this.http.delete<Answer []>("http://localhost:3000/answers?questionId=" + questionId).pipe(
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error ocured ${err.error.message}`; 
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

    
}