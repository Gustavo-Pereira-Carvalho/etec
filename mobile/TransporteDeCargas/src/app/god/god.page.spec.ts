import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GodPage } from './god.page';

describe('GodPage', () => {
  let component: GodPage;
  let fixture: ComponentFixture<GodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
