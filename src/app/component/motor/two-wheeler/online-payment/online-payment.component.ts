import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { DynamicFormComponent } from '../../../../dynamic/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-online-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, DynamicFormComponent],
  templateUrl: './online-payment.component.html',
  styleUrl: './online-payment.component.scss'
})
export class OnlinePaymentComponent implements OnInit {
  data: any;
  currentStep: number = 3;
  cardformGroup: FormGroup
  searchTerm = '';
  showDropdown = false;
  selectedBank: any = null;
  paymentOptions = [
    { id: 'upi', label: 'UPI', icon: 'icons/upi-icon.svg' },
    { id: 'credit', label: 'Credit/Debit Card', icon: 'icons/debit-card.svg' },
    { id: 'netbanking', label: 'Net Banking', icon: 'icons/net-banking.svg' },
    { id: 'emi', label: 'EMIs', icon: 'icons/emi-icon.svg' },
    { id: 'wallet', label: 'Wallet', icon: 'icons/wallet-icon.svg' },
  ];
  imagelist = [
    { id: 'mastercard', label: 'UPI', image: 'image/mastercard.png' },
    { id: 'maestro', label: 'Credit/Debit Card', image: 'image/maestro.png' },
    { id: 'rupay', label: 'rupay', image: 'image/rupay.png' },
    { id: 'visa', label: 'visa', image: 'image/visa.png' },
    { id: 'amex', label: 'amex', image: 'image/amex.png' },
  ];
  netbankinglist = [
    { id: 'hdfc', label: 'HDFC', image: 'image/hdfc.png' },
    { id: 'axis', label: 'AXIS', image: 'image/axis.png' },
    { id: 'sbi', label: 'SBI', image: 'image/sbi.png' },
    { id: 'icici', label: 'ICICI', image: 'image/icici.png' }
  ];
  selectednetbankingOption: string = '';
  cardconfig = [{
    type: 'radio',
    label: 'Marital Status',
    name: 'marital_status',
    options: [{ id: 1, value: 'Debit Card' }, { id: 2, value: 'Credit Card' }],
  },
  {
    type: 'text',
    label: 'Name on the card',
    name: 'name',
    placeholder: 'XXXX XXXX XXXX XXXX',

  },

  {
    type: 'onlymonth',
    label: 'Select State',
    name: 'state',
    options: [{ id: 1, value: 'Mr' }, { id: 2, value: 'Miss' }, { id: 3, value: 'Mrs' }],
    required: true,
  },
  {
    type: 'onlyyear',
    label: 'Select Country',
    name: 'country',
    options: [{ id: 1, value: 'Mr' }, { id: 2, value: 'Miss' }, { id: 3, value: 'Mrs' }],
    required: true,
  },
  {
    type: 'text',
    label: 'CVV',
    name: 'cvv',
    placeholder: 'XXX'
  },

  ];

  filteredList = [...this.netbankinglist];
  selectedTab: string = 'upi'; // Default tab
  upiId: string = ''; // Input value for UPI ID
  qrcode: boolean = false;
  constructor(private router: Router, private _sharedService: SharedService, private fb: FormBuilder) {
    this.cardformGroup = this.fb.group({});
  }

  async ngOnInit() {

    this._sharedService.emitChange(this.currentStep);
    await this.formbuild();
  }

  // Function to set the selected tab
  selectTab(tabId: string) {
    this.selectedTab = tabId;
  }
  generateqrcode() {
    this.qrcode = true;
  }

  async formbuild() {
    this.cardconfig.forEach((field) => {
      if (field.type !== 'button' && field.name) {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        this.cardformGroup.addControl(field.name, this.fb.control('', validators));
      }
    });

  }

  filterList() {
    this.filteredList = this.netbankinglist.filter((bank) =>
      bank.label.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.showDropdown = this.searchTerm.length > 0;
  }

  selectBank(bank: any) {
    this.selectedBank = bank;
    this.searchTerm = bank.label;
    this.showDropdown = false;
  }
}