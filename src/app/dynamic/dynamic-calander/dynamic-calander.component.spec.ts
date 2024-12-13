import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCalanderComponent } from './dynamic-calander.component';

describe('DynamicCalanderComponent', () => {
  let component: DynamicCalanderComponent;
  let fixture: ComponentFixture<DynamicCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicCalanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
