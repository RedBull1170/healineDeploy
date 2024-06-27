import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaConsultarSecretariaComponent } from './historia-consultar-secretaria.component';

describe('HistoriaConsultarSecretariaComponent', () => {
  let component: HistoriaConsultarSecretariaComponent;
  let fixture: ComponentFixture<HistoriaConsultarSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriaConsultarSecretariaComponent]
    });
    fixture = TestBed.createComponent(HistoriaConsultarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
