import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanstosellComponent } from './loanstosell.component';

describe('LoanstosellComponent', () => {
  let component: LoanstosellComponent;
  let fixture: ComponentFixture<LoanstosellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanstosellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanstosellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
