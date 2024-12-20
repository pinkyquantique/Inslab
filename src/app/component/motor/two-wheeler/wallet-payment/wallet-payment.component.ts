import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { LoadingComponent } from '../../../../loading.component';


@Component({
  selector: 'app-wallet-payment',
  standalone: true,
  imports: [CommonModule,LoadingComponent],
  templateUrl: './wallet-payment.component.html',
  styleUrl: './wallet-payment.component.scss'
})
export class WalletPaymentComponent implements OnInit {
  currentStep: number = 3;
  isLoading: boolean = false; 
  loadingMessage: string = 'Loading...';
 constructor(private router: Router, private _sharedService: SharedService) {


  }
  async ngOnInit() {

    this._sharedService.emitChange(this.currentStep);
  
  }

  startLoading(event: Event) {
    event.preventDefault();  // Prevent form submit or link navigation

    this.isLoading = true; // Show the loader
    this.loadingMessage = 'Fetching data...'; // Update the loader message

    // Simulate a long-running operation (like fetching data)
    setTimeout(() => {
      this.isLoading = false; // Hide the loader after 3 seconds
    }, 3000); // Adjust the timeout as per your actual data fetch duration
  }

  
  onFormSubmit() {
    this.router.navigate(['/pages/motor/two-wheeler/confirmation'])
  }
 
}
