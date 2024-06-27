import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoOrdenesComponent } from './medico-ordenes.component';

describe('MedicoOrdenesComponent', () => {
  let component: MedicoOrdenesComponent;
  let fixture: ComponentFixture<MedicoOrdenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoOrdenesComponent]
    });
    fixture = TestBed.createComponent(MedicoOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
