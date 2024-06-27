import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesHomeComponent } from './sedes-home.component';

describe('SedesHomeComponent', () => {
  let component: SedesHomeComponent;
  let fixture: ComponentFixture<SedesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SedesHomeComponent]
    });
    fixture = TestBed.createComponent(SedesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
