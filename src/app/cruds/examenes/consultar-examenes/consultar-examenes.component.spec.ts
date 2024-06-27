import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExamenesComponent } from './consultar-examenes.component';

describe('ConsultarExamenesComponent', () => {
  let component: ConsultarExamenesComponent;
  let fixture: ComponentFixture<ConsultarExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarExamenesComponent]
    });
    fixture = TestBed.createComponent(ConsultarExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
