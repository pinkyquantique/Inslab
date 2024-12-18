import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PolicyDetailComponent } from '../policy-detail/policy-detail.component';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-mode',
  standalone: true,
  imports: [CommonModule,PolicyDetailComponent],
  templateUrl: './payment-mode.component.html',
  styleUrl: './payment-mode.component.scss'
})
export class PaymentModeComponent {
  currentStep: number = 3;
  selectedOption: string = '';
      constructor(private router: Router, private _sharedService: SharedService, private fb: FormBuilder) {}
  async ngOnInit() {


    
    this._sharedService.emitChange(this.currentStep);
  }



  selectOption(option: string) {
    this.selectedOption = option;
   
  }
  onFormSubmit() {
    if( this.selectedOption==='online')
      {   this.router.navigate(['/pages/motor/two-wheeler/online-payment']) }
   else if(this.selectedOption==='wallet'){
    this.router.navigate(['/pages/motor/two-wheeler/wallet-payment'])
   }
   else{
    alert("select mode")
   }
}
}
