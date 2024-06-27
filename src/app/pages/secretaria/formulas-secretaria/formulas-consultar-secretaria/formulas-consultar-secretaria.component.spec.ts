import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulasConsultarSecretariaComponent } from './formulas-consultar-secretaria.component';

describe('FormulasConsultarSecretariaComponent', () => {
  let component: FormulasConsultarSecretariaComponent;
  let fixture: ComponentFixture<FormulasConsultarSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulasConsultarSecretariaComponent]
    });
    fixture = TestBed.createComponent(FormulasConsultarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
