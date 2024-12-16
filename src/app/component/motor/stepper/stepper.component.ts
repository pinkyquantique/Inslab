import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
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
    constructor(private _sharedService: SharedService,  private cdr: ChangeDetectorRef) {
      
    }
    ngOnInit() {
      
      this._sharedService.changeEmitted$.subscribe((text: any) => {
        this.submitForm(text);
      });
     
    }
    ngAfterViewInit() {
      
    }
    goToStep(stepIndex: number) {
      
      this.currentStep = stepIndex;
    }
  
    submitForm(currentStep: number) {
      console.log(currentStep,'currentStep')
    
        this.currentStep = currentStep;
    
        // Reset all steps after the current step to false
        for (let i = 0; i < this.steps.length; i++) {
          this.completedSteps[i] = i < this.currentStep;
        }
        this.cdr.detectChanges();
  }
  goBack() {
    window.history.back();  // Navigate to the previous route in history
  }
}