import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSedesComponent } from './consultar-sedes.component';

describe('ConsultarSedesComponent', () => {
  let component: ConsultarSedesComponent;
  let fixture: ComponentFixture<ConsultarSedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarSedesComponent]
    });
    fixture = TestBed.createComponent(ConsultarSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
