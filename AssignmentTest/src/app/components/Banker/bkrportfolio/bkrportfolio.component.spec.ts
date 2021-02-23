import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkrportfolioComponent } from './bkrportfolio.component';

describe('BkrportfolioComponent', () => {
  let component: BkrportfolioComponent;
  let fixture: ComponentFixture<BkrportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkrportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkrportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
