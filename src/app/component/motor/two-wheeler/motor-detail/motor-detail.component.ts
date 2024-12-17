import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { SearchbarComponent } from '../../../../dynamic/searchbar/searchbar.component';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../../../../dynamic/dynamic-form/dynamic-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-motor-deta il',
  standalone: true,
  imports: [SearchbarComponent, DynamicFormComponent,CommonModule,],
  templateUrl: './motor-detail.component.html',
  styleUrls: ['./motor-detail.component.scss'] // Corrected styleUrls
})

export class MotorDetailComponent implements OnInit, AfterViewInit {
  currentStep: number = 0;
  formGroup: FormGroup;
  selectedPolicy: string = 'new'; // Track the selected policy (new or renew)
  

  constructor(private router: Router, private _sharedService: SharedService,private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
   
  }
config = [
  {
    type: 'select',
    label: 'Make',
    name: 'make',
    placeholder:'select...',
    options: [{id:1,value:'USA'},{id:2,value: 'Canada'}, {id:3,value:'Australia'}],
    required: true,
  },
    {
      type: 'select',
      label: 'Model',
      name: 'model',
      placeholder:'select...',
      options: [{id:1,value:'USA'},{id:2,value: 'Canada'}, {id:3,value:'Australia'}],
      required: true,
    },
    {
      type: 'select',
      label: 'Variant',
      name: 'variant',
      placeholder:'select...',
      options: [{id:1,value:'USA'},{id:2,value: 'Canada'}, {id:3,value:'Australia'}],
      required: true,
    },
    {
      type: 'select',
      label: 'RTO',
      name: 'rto',
      placeholder:'select...',
      options: [{id:1,value:'USA'},{id:2,value: 'Canada'}, {id:3,value:'Australia'}],
      required: true,
    },
    {
      type: 'text',
      label: 'Registration Code',
      name: 'registration_code',
      placeholder: 'Enter your registration code',
      required: true,
    },
    {
      type: 'text',
      label: 'Registration Number',
      name: 'registration_number',
      placeholder: 'Enter your registration Number',
      required: true,
    },{
      type:'month',
      name: 'manufacturing-month', // A unique name for the field
      placeholder: 'select  Month & year',
      label: 'Manufacturing Month & year',
      required: true,
      yearPlaceholder: 'Select Year',
      monthPlaceholder: 'Select Month',
      note: 'Please select a valid year and month.'
    },
    // {
      
    //   type:'date',
    //   label: 'Manufacturing Month & year',
    //   name: 'Manufacturing',
    //   highlightToday: true,
    //   datetype:'month',
    //   dateFormat: 'MM/yyyy'
    // },
    {
      
      type:'date',
      label: 'Purchase Registration Date',
      name: 'purchase_reg_date ',
      placeholder: 'select date',
      highlightToday: true,
      dateFormat: 'dd/MM/yyyy'
    },
    
    {
      type: 'text',
      label: 'Invoice price of vehicle',
      name: 'Invoice price of vehicle',
      placeholder: 'Enter your registration code',
      note:'Note : Invoice price between 4600051 to 9500000',
      required: true,
    },
    // {
    //   type: 'button',
    //   label: 'Submit',
    //   event: 'onFormSubmit'
    // },
    // {
    //   type: 'button',
    //   label: 'Cancel',
    //   event: 'onFormCancel'
    // }
  ];
  async ngOnInit() {
   
   
  
    await this.config.forEach((field) => {
      if (field.type !== 'button' && field.name) {  
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.formGroup.addControl(field.name, this.fb.control('', validators));
      }
    });
    this._sharedService.emitChange(this.currentStep);
  }
  

  ngAfterViewInit() {
 
  }
 

  onClickOutside() {
    this.selectedPolicy = ''; // Reset when clicking outside
  } 
  onRadioSelect(policyType: string) {
    this.selectedPolicy = policyType;
  }
  onFormSubmit() {
    alert(1)
    if (this.formGroup.valid) {
      console.log('Form Data:', this.formGroup.value);
      // Handle form submission logic
      this.router.navigate(['/pages/motor/two-wheeler/plan'])
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched(this.formGroup);
    }
  }

  onFormCancel() {
    console.log('Form canceled!');
    // Handle form cancel logic (e.g., reset the form)
    this.formGroup.reset();
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}