import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarCitasMedicoComponent } from './editar-consultar-citas-medico.component';

describe('EditarConsultarCitasMedicoComponent', () => {
  let component: EditarConsultarCitasMedicoComponent;
  let fixture: ComponentFixture<EditarConsultarCitasMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarCitasMedicoComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarCitasMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
