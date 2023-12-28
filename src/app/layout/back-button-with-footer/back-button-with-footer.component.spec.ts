import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonWithFooterComponent } from './back-button-with-footer.component';

describe('BackButtonWithFooterComponent', () => {
  let component: BackButtonWithFooterComponent;
  let fixture: ComponentFixture<BackButtonWithFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackButtonWithFooterComponent]
    });
    fixture = TestBed.createComponent(BackButtonWithFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
