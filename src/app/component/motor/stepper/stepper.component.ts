import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})

  export class StepperComponent {
    steps = [1, 2, 3, 4, 5]; // Example steps
    currentStep = 0;
    completedSteps = [false, false, false, false, false]; // Track completed steps
  
    goToStep(stepIndex: number) {
      this.currentStep = stepIndex;
    }
  
    submitForm() {
      if (this.currentStep < this.steps.length - 1) {
        this.completedSteps[this.currentStep] = true;
        this.currentStep++;
      }
    }
  }