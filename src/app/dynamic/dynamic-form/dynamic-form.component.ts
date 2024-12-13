import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from '../dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from '../dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from '../dynamic-checkbox/dynamic-checkbox.component';
import { DynamicButtonComponent } from '../dynamic-button/dynamic-button.component';
import { DynamicCalanderComponent } from '../dynamic-calander/dynamic-calander.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, 
    DynamicInputComponent, DynamicSelectComponent, 
    DynamicRadioComponent,DynamicCheckboxComponent,
    DynamicButtonComponent,DynamicCalanderComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  @Input() config: any[] = [];
  @Input() formGroup: FormGroup = {} as FormGroup;
  @Output() formSubmit = new EventEmitter<void>();
  @Output() formCancel = new EventEmitter<void>();

  // Handle the button click and emit the correct event to parent
  handleButtonClick(event: string) {
    if (event === 'onFormSubmit') {
      if (this.formGroup.valid) {
        this.formSubmit.emit();
      } else {
        console.log('Form is invalid');
        this.markFormGroupTouched(this.formGroup);
      }
    } else if (event === 'onFormCancel') {
      this.formCancel.emit();
    }
  }
  isHalfWidth(field: any): boolean {     
      return field.type === 'text' || field.type === 'select'||field.type === 'radio' ||field.type === 'checkbox' ||field.type === 'date' ;  // Example logic
  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}