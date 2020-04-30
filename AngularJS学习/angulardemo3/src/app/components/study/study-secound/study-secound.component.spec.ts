import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySecoundComponent } from './study-secound.component';

describe('StudySecoundComponent', () => {
  let component: StudySecoundComponent;
  let fixture: ComponentFixture<StudySecoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudySecoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudySecoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
