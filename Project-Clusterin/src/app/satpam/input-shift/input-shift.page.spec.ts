import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputShiftPage } from './input-shift.page';

describe('InputShiftPage', () => {
  let component: InputShiftPage;
  let fixture: ComponentFixture<InputShiftPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputShiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
