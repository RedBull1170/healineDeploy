import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarOrdenesComponent } from './editar-consultar-ordenes.component';

describe('EditarConsultarOrdenesComponent', () => {
  let component: EditarConsultarOrdenesComponent;
  let fixture: ComponentFixture<EditarConsultarOrdenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarOrdenesComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
