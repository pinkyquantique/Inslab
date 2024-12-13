import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-radio',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-radio.component.html',
  styleUrl: './dynamic-radio.component.scss'
})
export class DynamicRadioComponent {
  @Input() config!: any;
  @Input() formGroup!: FormGroup;
}
