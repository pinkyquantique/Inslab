import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  fields = [
    { type: 'text', label: 'Name', name: 'name' },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'checkbox', label: 'Accept Terms', name: 'acceptTerms' },
    { type: 'radio', label: 'Gender', name: 'gender', options: ['Male', 'Female'] },
    { type: 'select', label: 'Country', name: 'country', options: ['USA', 'Canada', 'UK'] }
  ];

  constructor(private fb: FormBuilder) { this.form = this.fb.group({});}

  ngOnInit(): void {
   
    this.fields.forEach(field => {
      this.form.addControl(field.name, this.fb.control(''));
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}

