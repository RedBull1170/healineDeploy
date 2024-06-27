import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaRegistrarSecretariaComponent } from './agenda-registrar-secretaria.component';

describe('AgendaRegistrarSecretariaComponent', () => {
  let component: AgendaRegistrarSecretariaComponent;
  let fixture: ComponentFixture<AgendaRegistrarSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaRegistrarSecretariaComponent]
    });
    fixture = TestBed.createComponent(AgendaRegistrarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
