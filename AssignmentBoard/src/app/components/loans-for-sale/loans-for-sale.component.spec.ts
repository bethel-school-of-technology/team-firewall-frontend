import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansForSaleComponent } from './loans-for-sale.component';

describe('LoansForSaleComponent', () => {
  let component: LoansForSaleComponent;
  let fixture: ComponentFixture<LoansForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
