import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUpdatesContentComponent } from './last-updates-content.component';

describe('LastUpdatesContentComponent', () => {
  let component: LastUpdatesContentComponent;
  let fixture: ComponentFixture<LastUpdatesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastUpdatesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastUpdatesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
