import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPortfolioComponent } from './bank-portfolio.component';

describe('BankPortfolioComponent', () => {
  let component: BankPortfolioComponent;
  let fixture: ComponentFixture<BankPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
