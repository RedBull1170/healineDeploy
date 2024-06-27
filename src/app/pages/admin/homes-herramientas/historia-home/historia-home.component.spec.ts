import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaHomeComponent } from './historia-home.component';

describe('HistoriaHomeComponent', () => {
  let component: HistoriaHomeComponent;
  let fixture: ComponentFixture<HistoriaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriaHomeComponent]
    });
    fixture = TestBed.createComponent(HistoriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
