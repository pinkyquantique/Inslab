import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUploadComponent } from './dynamic-upload.component';

describe('DynamicUploadComponent', () => {
  let component: DynamicUploadComponent;
  let fixture: ComponentFixture<DynamicUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
