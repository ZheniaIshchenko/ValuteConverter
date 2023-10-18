import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutesRateComponent } from './valutes-rate.component';

describe('ValutesRateComponent', () => {
  let component: ValutesRateComponent;
  let fixture: ComponentFixture<ValutesRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValutesRateComponent]
    });
    fixture = TestBed.createComponent(ValutesRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
