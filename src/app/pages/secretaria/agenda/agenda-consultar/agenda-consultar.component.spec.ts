import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaConsultarComponent } from './agenda-consultar.component';

describe('AgendaConsultarComponent', () => {
  let component: AgendaConsultarComponent;
  let fixture: ComponentFixture<AgendaConsultarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaConsultarComponent]
    });
    fixture = TestBed.createComponent(AgendaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
