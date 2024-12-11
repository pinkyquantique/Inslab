import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faEnvelope, faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(library: FaIconLibrary,private router: Router) {
    library.addIcons(faEnvelope, faPhone, faArrowRight);
  }
  motor() {
  this.router.navigate(['/pages/motor/vehicleselection'])
  }
}
