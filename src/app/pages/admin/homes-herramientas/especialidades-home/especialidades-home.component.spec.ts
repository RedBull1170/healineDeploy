import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesHomeComponent } from './especialidades-home.component';

describe('EspecialidadesHomeComponent', () => {
  let component: EspecialidadesHomeComponent;
  let fixture: ComponentFixture<EspecialidadesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesHomeComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
