import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PolicyDetailComponent } from '../policy-detail/policy-detail.component';

@Component({
  selector: 'app-payment-mode',
  standalone: true,
  imports: [CommonModule,PolicyDetailComponent],
  templateUrl: './payment-mode.component.html',
  styleUrl: './payment-mode.component.scss'
})
export class PaymentModeComponent {

}
