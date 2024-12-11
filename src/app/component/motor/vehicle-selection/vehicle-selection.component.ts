import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-vehicle-selection',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vehicle-selection.component.html',
  styleUrl: './vehicle-selection.component.scss'
})
export class VehicleSelectionComponent {
  constructor(private router: Router,library: FaIconLibrary) { library.addIcons();}  // Inject the Router into your constructor
  @Output() stepChange = new EventEmitter<void>();

  goToNextStep() {
    console.log(1,'click')
    this.stepChange.emit(); // Emit the next step index
  }
  // Method to navigate to the next step
  nextStep() {
    this.router.navigate(['/step2']); // Navigate to the next step route
  }

}
