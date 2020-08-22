import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteEsseyContentComponent } from './write-essey-content.component';

describe('WriteEsseyContentComponent', () => {
  let component: WriteEsseyContentComponent;
  let fixture: ComponentFixture<WriteEsseyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteEsseyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteEsseyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
