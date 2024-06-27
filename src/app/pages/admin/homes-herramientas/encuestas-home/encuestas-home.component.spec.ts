import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasHomeComponent } from './encuestas-home.component';

describe('EncuestasHomeComponent', () => {
  let component: EncuestasHomeComponent;
  let fixture: ComponentFixture<EncuestasHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncuestasHomeComponent]
    });
    fixture = TestBed.createComponent(EncuestasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
