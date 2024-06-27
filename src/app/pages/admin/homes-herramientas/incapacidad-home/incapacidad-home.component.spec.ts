import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncapacidadHomeComponent } from './incapacidad-home.component';

describe('IncapacidadHomeComponent', () => {
  let component: IncapacidadHomeComponent;
  let fixture: ComponentFixture<IncapacidadHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncapacidadHomeComponent]
    });
    fixture = TestBed.createComponent(IncapacidadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
