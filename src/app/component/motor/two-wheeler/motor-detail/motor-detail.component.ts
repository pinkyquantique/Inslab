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
  styleUrls: ['./motor-detail.component.scss'] // Corrected styleUrls
})

export class MotorDetailComponent implements OnInit {
  currentStep: number = 1;

  constructor(private router: Router, private _sharedService: SharedService) {}

  config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      options: ['USA', 'Canada', 'Australia'],
      required: true,
    },
    {
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female'],
    },
    {
      type: 'checkbox',
      label: 'Hobbies',
      name: 'hobbies',
      options: ['Reading', 'Traveling', 'Gaming'],
    },
    {
      type: 'button',
      label: 'Submit',
    },
  ];

  ngOnInit() {
 
  }
  ngAfterViewInit() {

    this._sharedService.emitChange(this.currentStep);
  }
  onFormSubmit(formData: any): void {
    console.log('Form submitted:', formData);
    // Perform actions with the submitted form data
  }
}
