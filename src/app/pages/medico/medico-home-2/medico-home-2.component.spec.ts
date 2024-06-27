import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoHome2Component } from './medico-home-2.component';

describe('MedicoHome2Component', () => {
  let component: MedicoHome2Component;
  let fixture: ComponentFixture<MedicoHome2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoHome2Component]
    });
    fixture = TestBed.createComponent(MedicoHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
