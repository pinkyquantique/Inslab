import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { proposalData } from '../check-out/constant';

@Component({
  selector: 'app-policy-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policy-detail.component.html',
  styleUrl: './policy-detail.component.scss'
})
export class PolicyDetailComponent {
  data: any=proposalData;
}
