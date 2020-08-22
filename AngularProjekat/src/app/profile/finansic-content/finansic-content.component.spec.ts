import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinansicContentComponent } from './finansic-content.component';

describe('FinansicContentComponent', () => {
  let component: FinansicContentComponent;
  let fixture: ComponentFixture<FinansicContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinansicContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinansicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
