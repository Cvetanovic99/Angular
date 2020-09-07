import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Finansic } from '../../../models/finansic';
import * as FinansicActions from './finansic.actions';

export const finansicsFeatureKey = 'finansics';

export interface FinansicState extends EntityState<Finansic> {
  error: any
}

export const adapter: EntityAdapter<Finansic> = createEntityAdapter<Finansic>();

export const initialState: FinansicState = adapter.getInitialState({
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(FinansicActions.addFinansicSuccess,
    (state, action) => adapter.addOne(action.finansic, state)
  ),
  on(FinansicActions.upsertFinansic,
    (state, action) => adapter.upsertOne(action.finansic, state)
  ),
  on(FinansicActions.addFinansics,
    (state, action) => adapter.addMany(action.finansics, state)
  ),
  on(FinansicActions.upsertFinansics,
    (state, action) => adapter.upsertMany(action.finansics, state)
  ),
  on(FinansicActions.updateFinansic,
    (state, action) => adapter.updateOne(action.finansic, state)
  ),
  on(FinansicActions.updateFinansics,
    (state, action) => adapter.updateMany(action.finansics, state)
  ),
  on(FinansicActions.deleteFinansic,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(FinansicActions.deleteFinansics,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(FinansicActions.loadFinansicsSuccess,
    (state, action) => adapter.addAll(action.finansics, state)
  ),
  on(FinansicActions.addFinansicFailure,(state, action) => { 
    return {
      error: action.error
    }
  }),
  on(FinansicActions.loadFinansicsFailure, (state, action) => {
    return { 
      error: action.error
    }
  })
);

export const selectFinansicFeature = createFeatureSelector<FinansicState>(finansicsFeatureKey);

export const selectFinansics = createSelector(
  selectFinansicFeature,
  adapter.getSelectors().selectAll
)


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
