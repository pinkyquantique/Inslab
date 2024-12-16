import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MotorDetailComponent } from './motor-detail/motor-detail.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';

export const baseRoutes: Routes =[
  // { path: 'vehicleselection', component: VehicleSelectionComponent },
   { path: 'motor-detail', component: MotorDetailComponent },
  { path: 'plan', component: SelectPlanComponent },
  { path: 'personal-detail', component: PersonalDetailComponent },
  
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(baseRoutes)
  ]
})
export class TwoWheelerModule { }
