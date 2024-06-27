import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilPacienteComponent } from './editar-perfil-paciente.component';

describe('EditarPerfilPacienteComponent', () => {
  let component: EditarPerfilPacienteComponent;
  let fixture: ComponentFixture<EditarPerfilPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPerfilPacienteComponent]
    });
    fixture = TestBed.createComponent(EditarPerfilPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
