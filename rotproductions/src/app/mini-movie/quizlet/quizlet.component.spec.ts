import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizletComponent } from './quizlet.component';

describe('QuizletComponent', () => {
  let component: QuizletComponent;
  let fixture: ComponentFixture<QuizletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
