import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-monthcalander',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './dynamic-monthcalander.component.html',
  styleUrl: './dynamic-monthcalander.component.css'
})
export class DynamicMonthcalanderComponent  {
  @Input() config!: any;
  @Input() formGroup!: FormGroup;

  showPicker: boolean = false;
  selectedmonthDate: string = '';  // Bind to the input
  selectedYear: number = new Date().getFullYear();  // Default to current year
  selectedMonth: number = new Date().getMonth();  // Default to current month
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years: number[] = [];  // Populate dynamically based on the current year

  constructor() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 20 }, (_, index) => currentYear + index);  // Create a range of 20 years starting from current year
  }

  openPicker() {
    this.showPicker = true;
  }

  selectDate() {
    const month = this.months[this.selectedMonth];
    const year = this.selectedYear;
    this.selectedmonthDate = `${month} ${year}`;
    const control = this.formGroup.get(this.config.name) as any;
    control.setValue(...control.value, this.selectedmonthDate );
    this.showPicker = false;
  }
}