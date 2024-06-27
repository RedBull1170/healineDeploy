import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAgendaMedicoComponent } from './registrar-agenda-medico.component';

describe('RegistrarAgendaMedicoComponent', () => {
  let component: RegistrarAgendaMedicoComponent;
  let fixture: ComponentFixture<RegistrarAgendaMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAgendaMedicoComponent]
    });
    fixture = TestBed.createComponent(RegistrarAgendaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
