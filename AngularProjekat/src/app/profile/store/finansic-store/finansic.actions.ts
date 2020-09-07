import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Finansic } from '../../../models/finansic';

//Load Actions
export const loadFinansics = createAction(
  '[Finansic] Load Finansics', 
  props<{ userId: any }>()
);

export const loadFinansicsSuccess = createAction(
  '[Finansic] Load Finansics Success', 
  props<{ finansics: Finansic [] }>()
);

export const loadFinansicsFailure = createAction(
  '[Finansic] Load Finansics Failure', 
  props<{ error: any }>()
);

//Add Actions
export const addFinansic = createAction(
  '[Finansic] Add Finansic',
  props<{ finansic: Finansic }>()
);

export const addFinansicSuccess = createAction(
  '[Finansic] Add Finansic Success',
  props<{ finansic: Finansic }>()
);

export const addFinansicFailure = createAction(
  '[Finansic] Add Finansic Failure',
  props<{ error: any }>()
);

//////////
export const upsertFinansic = createAction(
  '[Finansic/API] Upsert Finansic',
  props<{ finansic: Finansic }>()
);

export const addFinansics = createAction(
  '[Finansic/API] Add Finansics',
  props<{ finansics: Finansic[] }>()
);

export const upsertFinansics = createAction(
  '[Finansic/API] Upsert Finansics',
  props<{ finansics: Finansic[] }>()
);

export const updateFinansic = createAction(
  '[Finansic/API] Update Finansic',
  props<{ finansic: Update<Finansic> }>()
);

export const updateFinansics = createAction(
  '[Finansic/API] Update Finansics',
  props<{ finansics: Update<Finansic>[] }>()
);

export const deleteFinansic = createAction(
  '[Finansic/API] Delete Finansic',
  props<{ id: string }>()
);

export const deleteFinansics = createAction(
  '[Finansic/API] Delete Finansics',
  props<{ ids: string[] }>()
);

export const clearFinansics = createAction(
  '[Finansic/API] Clear Finansics'
);
