import { Component } from '@angular/core';
import { SearchbarComponent } from '../../../../dynamic/searchbar/searchbar.component';

@Component({
  selector: 'app-motor-detail',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './motor-detail.component.html',
  styleUrl: './motor-detail.component.css'
})
export class MotorDetailComponent {

}
