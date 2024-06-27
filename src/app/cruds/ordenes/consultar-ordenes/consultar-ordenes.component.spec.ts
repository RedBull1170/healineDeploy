import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOrdenesComponent } from './consultar-ordenes.component';

describe('ConsultarOrdenesComponent', () => {
  let component: ConsultarOrdenesComponent;
  let fixture: ComponentFixture<ConsultarOrdenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarOrdenesComponent]
    });
    fixture = TestBed.createComponent(ConsultarOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
