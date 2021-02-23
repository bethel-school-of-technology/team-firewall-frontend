import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupbankerComponent } from './signupbanker.component';

describe('SignupbankerComponent', () => {
  let component: SignupbankerComponent;
  let fixture: ComponentFixture<SignupbankerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupbankerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupbankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
