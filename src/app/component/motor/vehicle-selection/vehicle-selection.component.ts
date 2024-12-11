import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-selection',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-selection.component.html',
  styleUrl: './vehicle-selection.component.scss'
})
export class VehicleSelectionComponent {
  constructor(private router: Router) {}  // Inject the Router into your constructor

  // Method to navigate to the next step
  nextStep() {
    this.router.navigate(['/step2']); // Navigate to the next step route
  }

}
