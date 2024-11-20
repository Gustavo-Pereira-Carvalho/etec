import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmadoPage } from './confirmado.page';

describe('ConfirmadoPage', () => {
  let component: ConfirmadoPage;
  let fixture: ComponentFixture<ConfirmadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
