import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesAdminComponent } from './especialidades-admin.component';

describe('EspecialidadesAdminComponent', () => {
  let component: EspecialidadesAdminComponent;
  let fixture: ComponentFixture<EspecialidadesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesAdminComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
