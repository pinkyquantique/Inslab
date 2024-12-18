import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
  currentStep: number = 5;
  constructor(private router:Router,private _sharedService: SharedService,){    
    }
  async ngOnInit() {
    this._sharedService.emitChange(this.currentStep);
  }
  isVisible = true;
  closeNotification(): void{
    this.isVisible=false;
    console.log("close button");
  }
  tableData = [
    { member: 'Name 01', price: 'PRICE', qty: 'QTY', total1: 'TOTAL', total2: 'TOTAL' },
    { member: 'Name 01', price: 'PRICE', qty: 'QTY', total1: 'TOTAL', total2: 'TOTAL' },
    { member: 'Name 01', price: 'PRICE', qty: 'QTY', total1: 'TOTAL', total2: 'TOTAL' },
    { member: 'Name 01', price: 'PRICE', qty: 'QTY', total1: 'TOTAL', total2: 'TOTAL' },
    { member: 'Name 01', price: 'PRICE', qty: 'QTY', total1: 'TOTAL', total2: 'TOTAL' },
    { member: 'Name 01', price: 'PRICE', qty: 'QTY', total1: 'TOTAL', total2: 'TOTAL' },
  ];
  proposerDetails = {
    name: 'Neerav Desai',
    number: '+91 9835649060',
    email: 'abc123@gmail.com',
    gender: 'Male',
    dateOfBirth: '20-10-1998',
    address: '603, ABC Complex, 123 Road, Thane (W), 900056, Maharashtra.'
  };

  nomineeDetails = {
    name: 'Ahmad Raza',
    relationship: 'Brother'
  };

  planDetails = {
    coverAmount: '₹ 700000',
    basePremium: '1 Year',
    basePremiumAmount: '₹ 9,576',
    premiumPerMonth: '₹ 798',
    gst: '₹ 144',
    policyCreationDate: '12-09-2024',
    demoItems: ['Demo 01', 'Demo 02', 'Demo 03', 'Demo 04'],
    totalPremium: '₹ 11,304'
  };
  terms: string[] = [
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
    'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  ];


  goToDashboard(): void {
    console.log('Navigating to the Dashboard...');
    
  }
}
