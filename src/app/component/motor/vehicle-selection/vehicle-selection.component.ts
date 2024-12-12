import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-selection',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './vehicle-selection.component.html',
  styleUrl: './vehicle-selection.component.scss'
})
export class VehicleSelectionComponent {
  constructor(private router: Router,private _sharedService: SharedService,  private cdr: ChangeDetectorRef) { }  // Inject the Router into your constructor
  

  cards = [
    {
      type: 'twoWheeler',
      icon: '/icons/bike.svg',
      title: 'Two Wheeler',
      description: 'Motorcycles or Scooters; Secure rides with 2-wheeler insurance: peace of mind, financial protection, hassle-free claims.'
    },
    {
      type: 'fourWheeler',
      icon: '/icons/car.svg',
      title: 'Four Wheeler',
      description: 'Cars; Four-wheeler insurance ensures protection: financial security, accident coverage, peace of mind on the road.'
    },
    {
      type: 'commercial',
      icon: '/icons/truck.svg',
      title: 'Commercial',
      description: 'Taxi, Truck, Bus, PCCV, Three Wheelers like Van, Tempo, Auto, Miscellaneous; Get business protection, liability coverage, financial security.'
    }
  ];
  ngOnInit() {
    // this._sharedService.emitChange(0);
    // this.cdr.detectChanges();
  }

  
  ngAfterViewInit() {
    this._sharedService.emitChange(0);
  }

  goToNextStep(type:string) {
  
    this.router.navigate(['/pages/motor/two-wheeler/motor-detail'])
  }
 

}
