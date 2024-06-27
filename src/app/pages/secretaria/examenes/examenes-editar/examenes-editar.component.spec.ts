import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesEditarComponent } from './examenes-editar.component';

describe('ExamenesEditarComponent', () => {
  let component: ExamenesEditarComponent;
  let fixture: ComponentFixture<ExamenesEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenesEditarComponent]
    });
    fixture = TestBed.createComponent(ExamenesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
