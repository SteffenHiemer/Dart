import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutModeComponent } from './checkout-mode.component';

describe('CheckoutModeComponent', () => {
  let component: CheckoutModeComponent;
  let fixture: ComponentFixture<CheckoutModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutModeComponent]
    });
    fixture = TestBed.createComponent(CheckoutModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
