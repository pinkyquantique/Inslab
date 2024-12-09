import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-input.component.html',
  styleUrl: './dynamic-input.component.css'
})
export class DynamicInputComponent {
  @Input() field: any;
  @Input() form: FormGroup | undefined;

  ngOnInit() {
    // Ensure form is defined before adding control
    if (this.form && this.field) {
      this.form.addControl(this.field.name, new FormControl(''));
    } else {
      console.warn('Form or field is not defined!');
    }
  }
}
