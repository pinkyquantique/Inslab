import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-select',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-select.component.html',
  styleUrl: './dynamic-select.component.scss'
})
export class DynamicSelectComponent {
  @Input() config!: any;
  @Input() formGroup!: FormGroup;

}
