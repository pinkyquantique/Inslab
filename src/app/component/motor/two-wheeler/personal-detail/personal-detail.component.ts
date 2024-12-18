import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DynamicFormComponent } from '../../../../dynamic/dynamic-form/dynamic-form.component';
import { proposalData } from '../check-out/constant';
import { PolicyDetailComponent } from '../policy-detail/policy-detail.component';

@Component({
  selector: 'app-personal-detail',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, FormsModule,PolicyDetailComponent],
  templateUrl: './personal-detail.component.html',
  styleUrl: './personal-detail.component.scss'
})
export class PersonalDetailComponent implements OnInit {
  currentStep: number = 2;
  vechiledetailformGroup: FormGroup;
  addressformGroup: FormGroup;
  selectedMaritalStatus: string = '';
  selectedepestatus: string = '';
  ownergeneraldetailformGroup: FormGroup;
  nomieegeneraldetailformGroup: FormGroup;
  hypothecationformGroup: FormGroup;
  odprepolicydetailformGroup: FormGroup;
  tpprepolicydetailformGroup: FormGroup;
  ckycdetailformGroup: FormGroup;

  constructor(private router: Router, private _sharedService: SharedService, private fb: FormBuilder) {
    this.vechiledetailformGroup = this.fb.group({});
    this.ownergeneraldetailformGroup = this.fb.group({});
    this.addressformGroup = this.fb.group({});
    this.nomieegeneraldetailformGroup = this.fb.group({});
    this.hypothecationformGroup = this.fb.group({});
    this.odprepolicydetailformGroup = this.fb.group({});
    this.tpprepolicydetailformGroup = this.fb.group({});
    this.ckycdetailformGroup = this.fb.group({});
  }

  vechiledetail = [

    {
      type: 'text',
      label: 'Engine Number',
      name: 'engine_number',
      placeholder: 'Engine Number',
      required: true,
    },
    {
      type: 'text',
      label: 'Chasis Number',
      name: 'chasis_number',
      placeholder: 'Chasis Number',
      required: true,
    },
    {
      type: 'select',
      label: 'Color',
      name: 'color',
      options: [{ id: 1, value: 'Red' }, { id: 2, value: 'Blue' }, { id: 3, value: 'Yellow' }],
      required: true,
    },

    {
      type: 'select',
      label: 'RTO|Reg.Code-Number',
      name: 'hobbies',
      options: [{ id: 1, value: 'Red' }, { id: 2, value: 'Blue' }, { id: 3, value: 'Yellow' }],
    },

  ];
  ownergeneraldetailconfig = [
    {
      type: 'select',
      label: 'Title',
      name: 'title',
      options: [{ id: 1, name: 'Mr' }, { id: 2, name: 'Miss' }, { id: 3, name: 'Mrs' }],
      required: true,
    },
    {
      type: 'text',
      label: 'Full Name',
      name: 'full_name',
      placeholder: 'Full Name',
      required: true,
    },
    {

      type: 'date',
      label: 'Date Of Birth',
      name: 'date_of_birth ',
      placeholder: 'select date',
      highlightToday: true,
      dateFormat: 'dd/MM/yyyy'
    },
    {
      type: 'text',
      label: 'Contact Number',
      name: 'contact_number',
      placeholder: 'Contact Number',
      required: true,
    },
    {
      type: 'text',
      label: 'Email Id',
      name: 'email_id',
      placeholder: 'Email Id',
      required: true,
    },
    {
      type: 'text',
      label: 'PAN Number',
      name: 'pan_number',
      placeholder: 'PAN Number',
      required: true,
    },
    {
      type: 'text',
      label: 'Aadhar Number',
      name: 'aadhar_number',
      placeholder: 'Aadhar Number',
      required: true,
    },
    {
      type: 'text',
      label: 'GST Number',
      name: 'gst_number',
      placeholder: 'GST Number',
      required: true,
    }]
  addressconfig = [
    {
      type: 'select',
      label: 'Select City',
      name: 'city',
      options: [{ id: 1, value: 'Mr' }, { id: 2, value: 'Miss' }, { id: 3, value: 'Mrs' }],
      required: true,
    },
    {
      type: 'select',
      label: 'Select State',
      name: 'state',
      options: [{ id: 1, value: 'Mr' }, { id: 2, value: 'Miss' }, { id: 3, value: 'Mrs' }],
      required: true,
    },
    {
      type: 'select',
      label: 'Select Country',
      name: 'country',
      options: [{ id: 1, value: 'Mr' }, { id: 2, value: 'Miss' }, { id: 3, value: 'Mrs' }],
      required: true,
    },
    {
      type: 'text',
      label: 'Pincode',
      name: 'pincode',
      placeholder: 'Pincode',
      required: true,
    },
    {
      type: 'text',
      label: 'Complete Address',
      name: 'address',
      placeholder: 'Complete Address',
      required: true,
    },
    // {
    //     type: 'radio',
    //     label: 'Marital Status',
    //     name: 'marital_status',
    //     options: ['Male', 'Female'],
    //   },
  ];
  nomieegeneraldetailconfig = [
    {
      type: 'select',
      label: 'Title',
      name: 'title',
      options: [{ id: 1, value: 'Mr' }, { id: 2, value: 'Miss' }, { id: 3, value: 'Mrs' }],
      required: true,
    },
    {
      type: 'text',
      label: 'Full Name',
      name: 'full_name',
      placeholder: 'Full Name',
      required: true,
    },
    {
      type: 'text',
      label: 'Age',
      name: 'age',
      placeholder: 'age',
      required: true,
    }, {
      type: 'text',
      label: 'Relation',
      name: 'relation',
      placeholder: 'Relation',
      required: true,
    }]

  hypothecationconfig = [
    {
      type: 'select',
      label: 'Select Agreement',
      name: 'agreement',
      options: [{ id: 1, name: 'Mr' }, { id: 2, name: 'Miss' }, { id: 3, name: 'Mrs' }],
      required: true,
    },
    {
      type: 'select',
      label: 'Select Financier',
      name: 'financier',
      options: [{ id: 1, name: 'Mr' }, { id: 2, name: 'Miss' }, { id: 3, name: 'Mrs' }],
      required: true,
    },
    {
      type: 'select',
      label: 'Select City',
      name: 'City',
      options: [{ id: 1, name: 'Mr' }, { id: 2, name: 'Miss' }, { id: 3, name: 'Mrs' }],
      required: true,
    }
  ]
  odprepolicydetailconfig = [
    {
      type: 'text',
      label: 'OD Previous Policy Number',
      name: 'od_previous_policy_number',
      placeholder: 'OD Previous Policy Number',
      required: true,
    },
    {
      type: 'text',
      label: 'OD Previous Insurance',
      name: 'od_previous_insurance',
      placeholder: 'OD Previous Insurance',
      required: true,
    },
    {
      type: 'select',
      label: 'Upload Pre-Year OD Policy ',
      name: 'Pre-Year OD Policy ',
      options: [{ id: 1, value: 'Mr' }, { id: 2, value: 'Miss' }, { id: 3, value: 'Mrs' }],
      required: true,
    }
  ]
  tpprepolicydetailconfig = [
    {
      type: 'text',
      label: 'TP Previous Policy Number',
      name: 'tp_previous_policy_number',
      placeholder: 'TP Previous Policy Number',
      required: true,
    },
    {
      type: 'text',
      label: 'TP Previous Insurance',
      name: 'tp_previous_insurance',
      placeholder: 'TP Previous Insurance',
      required: true,
    },
    {
      type: 'upload',
      label: 'Upload Pre-Year TP Policy ',
      name: 'pre_year_tp_policy ',
      options: [{ id: 1, value: 'Mr' }, { id: 2, value: 'Miss' }, { id: 3, value: 'Mrs' }],
      required: true,
    }
  ]
 ckycdetailconfig = [
    {
          type: 'select',
          label: 'Select Document Type ',
          name: 'document_type',
          options: [{id:1,value:'Mr'},{id:2,value: 'Miss'},{id:3,value: 'Mrs'}],
          required: true,
        },
{
    type: 'text',
    label: 'Document/UID Number',
    name: 'doc_uid_number',
    placeholder: 'Document/UID Number',
    required: true,
  }

     ]
  maritalstatusoption = [{ id: 1, value: 'Single' }, { id: 2, value: 'Married' }];

  epestatusoption = [{ id: true, value: 'Yes' }, { id: false, value: 'No' }];

  async ngOnInit() {

    await this.formbuild();
    
    this._sharedService.emitChange(this.currentStep);
  }

  async formbuild() {
    this.vechiledetail.forEach((field) => {
      if (field.type !== 'button' && field.name) {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.vechiledetailformGroup.addControl(field.name, this.fb.control('', validators));
      }
    });
    this.ownergeneraldetailconfig.forEach((field) => {
      if (field.type !== 'button' && field.name) {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.ownergeneraldetailformGroup.addControl(field.name, this.fb.control('', validators));
      }
    });
    this.addressconfig.forEach((field) => {
      if (field.type !== 'button' && field.name) {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.addressformGroup.addControl(field.name, this.fb.control('', validators));
      }
    });

    this.nomieegeneraldetailconfig.forEach((field) => {
      if (field.type !== 'button' && field.name) {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.nomieegeneraldetailformGroup.addControl(field.name, this.fb.control('', validators));
      }
    });
    this.odprepolicydetailconfig.forEach((field) => {
      if (field.type !== 'button' && field.name) {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.odprepolicydetailformGroup.addControl(field.name, this.fb.control('', validators));
      }
    });
    this.tpprepolicydetailconfig.forEach((field) => {
      if (field.type !== 'button' && field.name) {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.tpprepolicydetailformGroup.addControl(field.name, this.fb.control('', validators));
      }
    });
    
    this.ckycdetailconfig.forEach((field) => {
      if (field.type !== 'button' && field.name) {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.ckycdetailformGroup.addControl(field.name, this.fb.control('', validators));
      }
    });
  }
  onstatusChange(event: any) {
    console.log('Selected value:', event)
    this.selectedMaritalStatus = event;
  }
  onepestatusChange(event: any) {
    console.log('Selected value:', event)
    this.selectedepestatus = event;
  }
  onFormSubmit() {
   
   
    this.router.navigate(['/pages/motor/two-wheeler/check-out'])
 
}
}
