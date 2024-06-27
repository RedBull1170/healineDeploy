import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesConsultarComponent } from './examenes-consultar.component';

describe('ExamenesConsultarComponent', () => {
  let component: ExamenesConsultarComponent;
  let fixture: ComponentFixture<ExamenesConsultarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenesConsultarComponent]
    });
    fixture = TestBed.createComponent(ExamenesConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
