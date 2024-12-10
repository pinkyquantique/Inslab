import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlayoutComponent } from './componentlayout.component';

describe('ComponentlayoutComponent', () => {
  let component: ComponentlayoutComponent;
  let fixture: ComponentFixture<ComponentlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
