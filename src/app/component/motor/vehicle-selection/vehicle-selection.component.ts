import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-vehicle-selection',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vehicle-selection.component.html',
  styleUrl: './vehicle-selection.component.scss'
})
export class VehicleSelectionComponent {
  constructor(private router: Router,private _sharedService: SharedService) { }  // Inject the Router into your constructor
  @Output() stepChange = new EventEmitter<void>();

  goToNextStep() {
    console.log(1,'click')
    this._sharedService.emitChange("Data from child"); // Emit the next step index
    this.router.navigate(['/pages/motor/two-wheeler/motor-detail'])
  }
  // Method to navigate to the next step
  nextStep() {
    this.router.navigate(['/step2']); // Navigate to the next step route
  }

}
