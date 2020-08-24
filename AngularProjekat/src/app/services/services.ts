import { Topic } from './../models/topic';
import { Injectable } from '@angular/core' 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable()

export class Service {
    user;
    user354 = {
        id: 1,
        name: "Ime",
        surname: "Prezime",
        password: "Sifra",
        username: "Username"
    }    
  constructor(private http: HttpClient) {
     
  }

  isLogIn(): boolean{
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user != null)
      return true;
    else 
      return false;
  }

  logIn() {
    localStorage.setItem('user', JSON.stringify(this.user354));
  }

  logOut() {
    localStorage.removeItem('user');
  }

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