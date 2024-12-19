import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlymonthComponent } from './onlymonth.component';

describe('OnlymonthComponent', () => {
  let component: OnlymonthComponent;
  let fixture: ComponentFixture<OnlymonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlymonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
