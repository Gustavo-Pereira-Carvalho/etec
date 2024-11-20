import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarioPage } from './mario.page';

describe('MarioPage', () => {
  let component: MarioPage;
  let fixture: ComponentFixture<MarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
