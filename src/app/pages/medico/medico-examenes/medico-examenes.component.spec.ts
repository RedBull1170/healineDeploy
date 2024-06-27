import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoExamenesComponent } from './medico-examenes.component';

describe('MedicoExamenesComponent', () => {
  let component: MedicoExamenesComponent;
  let fixture: ComponentFixture<MedicoExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoExamenesComponent]
    });
    fixture = TestBed.createComponent(MedicoExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
