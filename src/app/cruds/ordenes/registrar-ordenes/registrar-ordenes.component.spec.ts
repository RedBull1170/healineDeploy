import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOrdenesComponent } from './registrar-ordenes.component';

describe('RegistrarOrdenesComponent', () => {
  let component: RegistrarOrdenesComponent;
  let fixture: ComponentFixture<RegistrarOrdenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarOrdenesComponent]
    });
    fixture = TestBed.createComponent(RegistrarOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
