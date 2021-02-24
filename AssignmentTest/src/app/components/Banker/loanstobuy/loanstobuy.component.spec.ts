import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanstobuyComponent } from './loanstobuy.component';

describe('LoanstobuyComponent', () => {
  let component: LoanstobuyComponent;
  let fixture: ComponentFixture<LoanstobuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanstobuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanstobuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
