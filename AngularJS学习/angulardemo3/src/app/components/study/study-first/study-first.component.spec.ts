import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyFirstComponent } from './study-first.component';

describe('StudyFirstComponent', () => {
  let component: StudyFirstComponent;
  let fixture: ComponentFixture<StudyFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
