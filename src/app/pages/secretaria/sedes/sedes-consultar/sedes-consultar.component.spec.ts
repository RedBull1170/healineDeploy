import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesConsultarComponent } from './sedes-consultar.component';

describe('SedesConsultarComponent', () => {
  let component: SedesConsultarComponent;
  let fixture: ComponentFixture<SedesConsultarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SedesConsultarComponent]
    });
    fixture = TestBed.createComponent(SedesConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
