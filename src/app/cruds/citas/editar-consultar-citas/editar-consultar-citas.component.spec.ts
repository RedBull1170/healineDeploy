import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarCitasComponent } from './editar-consultar-citas.component';

describe('EditarConsultarCitasComponent', () => {
  let component: EditarConsultarCitasComponent;
  let fixture: ComponentFixture<EditarConsultarCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarCitasComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
