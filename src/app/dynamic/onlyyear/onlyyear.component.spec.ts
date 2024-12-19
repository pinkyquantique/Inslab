import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyyearComponent } from './onlyyear.component';

describe('OnlyyearComponent', () => {
  let component: OnlyyearComponent;
  let fixture: ComponentFixture<OnlyyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyyearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
