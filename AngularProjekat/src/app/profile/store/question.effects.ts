import { User } from './../../models/user';
import { Service } from './../../services/services';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, } from '@ngrx/effects';
import { mergeMap, map, catchError, concatMap} from 'rxjs/operators'
import * as fromActions from './questions.actions';
import { Observable, of } from 'rxjs';



@Injectable()
export class QuestionEffects {
  user: User;

  loadQuestions$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadQuestionss),
    mergeMap(() => this.service.getQuestions(this.user.id).pipe(
        map(questions => fromActions.loadQuestionssSuccess({questions: questions})),
        catchError(error => of(fromActions.loadQuestionssFailure({error: error})))
    ))
  ));

  addQuestion$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.addQuestion),
    mergeMap(action => this.service.postQuestion(action.question).pipe(
        map(question => fromActions.addQuestionSuccess({ question })),
        catchError(error => of(fromActions.addQuestionFailure({error: error})))
    ))
  ));

  updateQuestion$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.updateQuestion),
    concatMap(action => this.service.putQuestion(action.question.changes, +action.question.id)),
    ),
    {dispatch: false}
  )

  deleteQuestion$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.deleteQuestion),
    mergeMap(action => this.service.deleteQuestion(action.id).pipe(
      map(() => fromActions.deleteQuestionSuccess({ id: action.id })),
      catchError(error => of(fromActions.deleteQuestionFailure({ error: error })))
    )),
  ))

  constructor(private actions$: Actions, private service: Service) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
