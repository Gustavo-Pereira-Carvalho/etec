import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtorDetalhesPage } from './ator-detalhes.page';

describe('AtorDetalhesPage', () => {
  let component: AtorDetalhesPage;
  let fixture: ComponentFixture<AtorDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
