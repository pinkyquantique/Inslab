import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-calander',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dynamic-calander.component.html',
  styleUrl: './dynamic-calander.component.css'
})
export class DynamicCalanderComponent {
 
  @Input() config!: any;
  @Input() formGroup!: FormGroup;

    selectedDate = new FormControl('');
  
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
  
