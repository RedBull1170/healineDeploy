import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarExamenesComponent } from './editar-consultar-examenes.component';

describe('EditarConsultarExamenesComponent', () => {
  let component: EditarConsultarExamenesComponent;
  let fixture: ComponentFixture<EditarConsultarExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarExamenesComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
