import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-calander',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './dynamic-calander.component.html',
  styleUrl: './dynamic-calander.component.scss'
})
export class DynamicCalanderComponent implements OnInit {
 
  @Input() config!: any;
  @Input() formGroup!: FormGroup;
  minDate?: string;
  maxDate?: string;
  ngOnInit() {
    if (this.config.startDate) {
      this.minDate = this.formatDate(this.config.startDate);
    }
    if (this.config.endDate) {
      this.maxDate = this.formatDate(this.config.endDate);
    }
  }
  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
  }

}

