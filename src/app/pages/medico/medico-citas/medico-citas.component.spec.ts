import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCitasComponent } from './medico-citas.component';

describe('MedicoCitasComponent', () => {
  let component: MedicoCitasComponent;
  let fixture: ComponentFixture<MedicoCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoCitasComponent]
    });
    fixture = TestBed.createComponent(MedicoCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
