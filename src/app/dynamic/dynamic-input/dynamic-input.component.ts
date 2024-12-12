import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {
  @Input() form: any;
  @Input() field: any;
}
