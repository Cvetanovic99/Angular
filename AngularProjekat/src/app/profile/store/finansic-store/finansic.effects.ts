import { Service } from './../../../services/services';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as fromActions from './finansic.actions';
import { of } from 'rxjs';



@Injectable()
export class FinansicEffects {

  loadFinansics$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadFinansics),
    mergeMap((action) => this.service.getFinansics(action.userId).pipe(
        map(finansics => fromActions.loadFinansicsSuccess({finansics: finansics})),
        catchError(error => of(fromActions.loadFinansicsFailure({error: error})))
    ))
  ));

  addFinansic$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.addFinansic),
    mergeMap(action => this.service.postFinansic(action.finansic).pipe(
        map(finansic => fromActions.addFinansicSuccess({ finansic })),
        catchError(error => of(fromActions.addFinansicFailure({ error: error })))
    ))
  ));

  constructor(private actions$: Actions, private service: Service) {}

}
