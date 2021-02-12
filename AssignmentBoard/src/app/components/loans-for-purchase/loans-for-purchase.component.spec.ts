import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansForPurchaseComponent } from './loans-for-purchase.component';

describe('LoansForPurchaseComponent', () => {
  let component: LoansForPurchaseComponent;
  let fixture: ComponentFixture<LoansForPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansForPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansForPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
