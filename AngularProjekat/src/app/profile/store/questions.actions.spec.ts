import * as fromQuestions from './questions.actions';

describe('loadQuestionss', () => {
  it('should return an action', () => {
    expect(fromQuestions.loadQuestionss().type).toBe('[Questions] Load Questionss');
  });
});
