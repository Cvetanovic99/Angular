import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FinansicEffects } from './finansic.effects';

describe('FinansicEffects', () => {
  let actions$: Observable<any>;
  let effects: FinansicEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FinansicEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FinansicEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
