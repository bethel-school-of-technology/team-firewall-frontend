import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkrloginComponent } from './bkrlogin.component';

describe('BkrloginComponent', () => {
  let component: BkrloginComponent;
  let fixture: ComponentFixture<BkrloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkrloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkrloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
