import { Question } from './../../models/question';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

//Load questions
export const loadQuestionss = createAction(
  '[Questions] Load Questionss',
  props<{ userId: any }>()
);

export const loadQuestionssSuccess = createAction(
  '[Questions] Load Questionss Success',
  props<{ questions: Question [] }>()
);

export const loadQuestionssFailure = createAction(
  '[Questions] Load Questionss Failure',
  props<{ error: any }>()
);

//Add questions
export const addQuestion = createAction(
  '[Questions ] Add Question',
  props<{ question: Question }>()
);

export const addQuestionSuccess = createAction(
  '[Questions ] Add Question Success',
  props<{ question: Question }>()
);

export const addQuestionFailure = createAction(
  '[Questions ] Add Question Failure',
  props<{ error: any }>()
);

//Update question
export const updateQuestion = createAction(
  '[Question ] Update Question',
  props<{ question: Update<Question> }>()
);

//Delete question
export const deleteQuestion = createAction(
  '[Question ] Delete Question',
  props<{ id: number }>()
);

export const deleteQuestionSuccess = createAction(
  '[Question ] Delete Question Success',
  props<{ id: number }>()
);

export const deleteQuestionFailure = createAction(
  '[Question ] Delete Question Failure',
  props<{ error: any }>()
);
