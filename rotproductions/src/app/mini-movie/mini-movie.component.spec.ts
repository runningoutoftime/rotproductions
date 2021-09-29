import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMovieComponent } from './mini-movie.component';

describe('MiniMovieComponent', () => {
  let component: MiniMovieComponent;
  let fixture: ComponentFixture<MiniMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
