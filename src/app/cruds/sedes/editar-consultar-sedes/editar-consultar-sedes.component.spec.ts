import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarSedesComponent } from './editar-consultar-sedes.component';

describe('EditarConsultarSedesComponent', () => {
  let component: EditarConsultarSedesComponent;
  let fixture: ComponentFixture<EditarConsultarSedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarSedesComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
