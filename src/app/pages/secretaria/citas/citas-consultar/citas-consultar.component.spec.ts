import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasConsultarComponent } from './citas-consultar.component';

describe('CitasConsultarComponent', () => {
  let component: CitasConsultarComponent;
  let fixture: ComponentFixture<CitasConsultarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasConsultarComponent]
    });
    fixture = TestBed.createComponent(CitasConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
