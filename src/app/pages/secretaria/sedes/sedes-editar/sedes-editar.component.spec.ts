import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesEditarComponent } from './sedes-editar.component';

describe('SedesEditarComponent', () => {
  let component: SedesEditarComponent;
  let fixture: ComponentFixture<SedesEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SedesEditarComponent]
    });
    fixture = TestBed.createComponent(SedesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
