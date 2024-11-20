import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastPage } from './last.page';

describe('LastPage', () => {
  let component: LastPage;
  let fixture: ComponentFixture<LastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
