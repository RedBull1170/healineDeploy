import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenesMedicoComponent } from './editar-ordenes-medico.component';

describe('EditarOrdenesMedicoComponent', () => {
  let component: EditarOrdenesMedicoComponent;
  let fixture: ComponentFixture<EditarOrdenesMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarOrdenesMedicoComponent]
    });
    fixture = TestBed.createComponent(EditarOrdenesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
