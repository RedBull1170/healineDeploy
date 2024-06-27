import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarIncapacidadComponent } from './editar-consultar-incapacidad.component';

describe('EditarConsultarIncapacidadComponent', () => {
  let component: EditarConsultarIncapacidadComponent;
  let fixture: ComponentFixture<EditarConsultarIncapacidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarIncapacidadComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarIncapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
