import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-online-payment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './online-payment.component.html',
  styleUrl: './online-payment.component.scss'
})
export class OnlinePaymentComponent implements OnInit {
  data: any;
  currentStep: number = 3;
  paymentOptions = [
    { id: 'upi', label: 'UPI', icon: 'icons/upi-icon.svg'},
    { id: 'credit', label: 'Credit/Debit Card', icon: 'icons/debit-card.svg'},
    { id: 'netbanking', label: 'Net Banking', icon: 'icons/net-banking.svg'},
    { id: 'emi', label: 'EMIs' , icon: 'icons/emi-icon.svg'},
    { id: 'wallet', label: 'Wallet', icon: 'icons/wallet-icon.svg'},
  ];

  selectedTab: string = 'upi'; // Default tab
  upiId: string = ''; // Input value for UPI ID

    constructor(private router: Router, private _sharedService: SharedService, private fb: FormBuilder) {}

    async ngOnInit() {
   
    this._sharedService.emitChange(this.currentStep);
  }
 
  // Function to set the selected tab
  selectTab(tabId: string) {
    this.selectedTab = tabId;
  }
}