import { loadQuestionss, loadQuestionssSuccess, loadQuestionssFailure, addQuestionSuccess, addQuestionFailure, updateQuestion, deleteQuestion, deleteQuestionFailure, deleteQuestionSuccess } from './questions.actions';
import { Question } from './../../models/question';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { Action } from 'rxjs/internal/scheduler/Action';

export const stateFeatureKey = 'state';

export interface State extends EntityState<Question> {
  error: any,
}

export const adapter: EntityAdapter<Question> = createEntityAdapter<Question>();

export const initialState = adapter.getInitialState({
  error: undefined
});

export const reducers = createReducer(
  initialState,
  on(deleteQuestionSuccess, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),
  on(addQuestionSuccess, (state, action) => {
    return adapter.addOne(action.question, state);
  }),
  on(updateQuestion, (state, action) => {
    return adapter.updateOne(action.question, state);
  }),
  on(loadQuestionssSuccess, (state, action) => {
    return adapter.addAll(action.questions, state);
  }),
  on(loadQuestionssFailure, (state, action) => {
    return {
      error: action.error
    }
  }),
  on(addQuestionFailure, (state, action) => {
    return {
      error: action.error
    }
  }),
  on(deleteQuestionFailure, (state, action) => {
    return {
      error: action.error
    }
  }),

);

export const selectQuestionsFeature = createFeatureSelector<State>(stateFeatureKey);
 
export const selectQuestions = createSelector(
  selectQuestionsFeature,
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectQuestionsFeature,
  (state: State) => state.error
);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
