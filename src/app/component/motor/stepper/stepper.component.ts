import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})

  export class StepperComponent {
    steps = [{id:1,name:'Motor Details'}, {id:2,name:'Select Plan'},{id:3,name:'Personal Details'}, {id:4,name:'Checkout'},{id:5,name:'Confirmation'}]; // Example steps
    currentStep = 0;
    completedSteps = [false, false, false, false, false]; // Track completed steps
    constructor(private _sharedService: SharedService) {
      _sharedService.changeEmitted$.subscribe(text => {
        this.submitForm();
      });
  }
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