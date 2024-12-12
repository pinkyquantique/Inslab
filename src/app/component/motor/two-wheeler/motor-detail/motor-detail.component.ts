import { Component, OnInit } from '@angular/core';
import { SearchbarComponent } from '../../../../dynamic/searchbar/searchbar.component';
import { DynamicFormComponent } from '../../../../dynamic/dynamic-form/dynamic-form.component';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-motor-detail',
  standalone: true,
  imports: [SearchbarComponent, DynamicFormComponent],
  templateUrl: './motor-detail.component.html',
  styleUrls: ['./motor-detail.component.css'] // Corrected styleUrls
})

export class MotorDetailComponent implements OnInit {
  currentStep: number = 1;

  constructor(private router: Router, private _sharedService: SharedService) {}

  formSchema = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      validations: {
        required: true,
        maxLength: 50
      }
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' }
      ],
      validations: {
        required: true
      }
    },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      options: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'mx', label: 'Mexico' }
      ],
      validations: {
        required: true
      }
    }
  ];

  ngOnInit() {
 
  }
  ngAfterViewInit() {

    this._sharedService.emitChange(this.currentStep);
  }
}
