import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncapacidadConsultarSecretariaComponent } from './incapacidad-consultar-secretaria.component';

describe('IncapacidadConsultarSecretariaComponent', () => {
  let component: IncapacidadConsultarSecretariaComponent;
  let fixture: ComponentFixture<IncapacidadConsultarSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncapacidadConsultarSecretariaComponent]
    });
    fixture = TestBed.createComponent(IncapacidadConsultarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
