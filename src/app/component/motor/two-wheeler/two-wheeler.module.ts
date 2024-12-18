import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MotorDetailComponent } from './motor-detail/motor-detail.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';

export const baseRoutes: Routes =[
  // { path: 'vehicleselection', component: VehicleSelectionComponent },
   { path: 'motor-detail', component: MotorDetailComponent },
  { path: 'plan', component: SelectPlanComponent },
  { path: 'personal-detail', component: PersonalDetailComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'payment-mode', component: PaymentModeComponent },
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(baseRoutes)
  ]
})
export class TwoWheelerModule { }
