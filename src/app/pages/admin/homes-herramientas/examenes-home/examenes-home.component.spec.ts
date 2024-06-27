import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesHomeComponent } from './examenes-home.component';

describe('ExamenesHomeComponent', () => {
  let component: ExamenesHomeComponent;
  let fixture: ComponentFixture<ExamenesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenesHomeComponent]
    });
    fixture = TestBed.createComponent(ExamenesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
