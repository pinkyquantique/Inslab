import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css'
})
export class SelectPlanComponent {
  minValue = 463239;
  maxValue = 959898;
  currentValue = this.minValue;

  onSliderChange(){
    console.log('Current IDV Value:', this.currentValue);
  }
}
