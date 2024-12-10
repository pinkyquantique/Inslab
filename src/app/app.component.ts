import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicTableComponent } from './dynamic/dynamic-table/dynamic-table.component';
import { DynamicFormComponent } from './dynamic/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DynamicTableComponent,DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Inslab';
  tableData = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 32 }
  ];

  formFields = [
    { type: 'text', label: 'First Name', name: 'firstName' },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'checkbox', label: 'Accept Terms', name: 'acceptTerms' }
  ];

}
