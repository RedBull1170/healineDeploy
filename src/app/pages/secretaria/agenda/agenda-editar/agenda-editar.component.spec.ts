import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaEditarComponent } from './agenda-editar.component';

describe('AgendaEditarComponent', () => {
  let component: AgendaEditarComponent;
  let fixture: ComponentFixture<AgendaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaEditarComponent]
    });
    fixture = TestBed.createComponent(AgendaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
