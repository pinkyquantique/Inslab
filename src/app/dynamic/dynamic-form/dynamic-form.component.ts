import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from '../dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from '../dynamic-radio/dynamic-radio.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DynamicInputComponent, DynamicSelectComponent, DynamicRadioComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() schema: any[] = [];

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({});
  }

  ngOnInit() {
    const formControls = this.schema.reduce((controls, field) => {
      const validations = [];
      if (field.validations?.required) validations.push(Validators.required);
      if (field.validations?.maxLength) validations.push(Validators.maxLength(field.validations.maxLength));
      if (field.validations?.minLength) validations.push(Validators.minLength(field.validations.minLength));
      if (field.validations?.pattern) validations.push(Validators.pattern(field.validations.pattern));
      
      controls[field.name] = [field.value || '', validations];
      return controls;
    }, {});

    this.form = this.fb.group(formControls);
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
