import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { SearchbarComponent } from '../../../../dynamic/searchbar/searchbar.component';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../../../../dynamic/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-motor-deta il',
  standalone: true,
  imports: [SearchbarComponent, DynamicFormComponent,CommonModule],
  templateUrl: './motor-detail.component.html',
  styleUrls: ['./motor-detail.component.scss'] // Corrected styleUrls
})

export class MotorDetailComponent implements OnInit, AfterViewInit {
  currentStep: number = 1;
  selectedPolicy: string = '';  // Track the selected policy (new or renew)

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

  ngOnInit() {}

  ngAfterViewInit() {
    this._sharedService.emitChange(this.currentStep);
  }
  onFormSubmit(formData: any): void {
    console.log('Form submitted:', formData);
    // Perform actions with the submitted form data
  }

  onRadioSelect(policyType: string) {
    this.selectedPolicy = policyType;
  }

  onClickOutside() {
    this.selectedPolicy = ''; // Reset when clicking outside
  }
  
}


