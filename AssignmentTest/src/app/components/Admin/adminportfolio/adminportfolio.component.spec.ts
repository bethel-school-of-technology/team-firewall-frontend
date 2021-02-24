import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminportfolioComponent } from './adminportfolio.component';

describe('AdminportfolioComponent', () => {
  let component: AdminportfolioComponent;
  let fixture: ComponentFixture<AdminportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
