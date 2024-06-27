import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarAgendaComponent } from './editar-consultar-agenda.component';

describe('EditarConsultarAgendaComponent', () => {
  let component: EditarConsultarAgendaComponent;
  let fixture: ComponentFixture<EditarConsultarAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarAgendaComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
