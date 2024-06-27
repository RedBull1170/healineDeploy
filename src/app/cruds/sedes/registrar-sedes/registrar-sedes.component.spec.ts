import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSedesComponent } from './registrar-sedes.component';

describe('RegistrarSedesComponent', () => {
  let component: RegistrarSedesComponent;
  let fixture: ComponentFixture<RegistrarSedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSedesComponent]
    });
    fixture = TestBed.createComponent(RegistrarSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
