import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWarningComponent } from './login-warning.component';

describe('LoginWarningComponent', () => {
  let component: LoginWarningComponent;
  let fixture: ComponentFixture<LoginWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
