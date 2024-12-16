import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMonthcalanderComponent } from './dynamic-monthcalander.component';

describe('DynamicMonthcalanderComponent', () => {
  let component: DynamicMonthcalanderComponent;
  let fixture: ComponentFixture<DynamicMonthcalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicMonthcalanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicMonthcalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
