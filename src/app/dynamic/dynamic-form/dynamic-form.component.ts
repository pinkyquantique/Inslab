import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from '../dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from '../dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from '../dynamic-checkbox/dynamic-checkbox.component';
import { DynamicButtonComponent } from '../dynamic-button/dynamic-button.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DynamicInputComponent, DynamicSelectComponent, DynamicRadioComponent,DynamicCheckboxComponent,DynamicButtonComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() config: any[] = [];
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    const group: any = {};
    this.config.forEach((field) => {
      if (field.type !== 'button') {
        group[field.name] = [
          field.value || '',
          field.required ? Validators.required : null,
        ];
      }
    });
    this.formGroup = this.fb.group(group);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log('Form Submitted', this.formGroup.value);
    } else {
      console.log('Form Invalid');
    }
  }
  isHalfWidth(field: any): boolean {
    // Customize the logic to determine if a field should be half-width
     
      return field.type === 'text' || field.type === 'select'||field.type === 'radio' ||field.type === 'checkbox' ;  // Example logic
  }
}
