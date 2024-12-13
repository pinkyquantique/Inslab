import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-checkbox',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dynamic-checkbox.component.html',
  styleUrl: './dynamic-checkbox.component.css'
})
export class DynamicCheckboxComponent {
  @Input() config!: any;
  @Input() formGroup!: FormGroup;

  onCheckboxChange(event: any) {
    const control = this.formGroup.get(this.config.name) as any;
    if (event.target.checked) {
      control.setValue(...control.value, event.target.value);
    } else {
      control.setValue(control.value.filter((v: any) => v !== event.target.value));
    }
  }
}
