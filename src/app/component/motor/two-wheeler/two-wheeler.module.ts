import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MotorDetailComponent } from './motor-detail/motor-detail.component';

export const baseRoutes: Routes =[
  // { path: 'vehicleselection', component: VehicleSelectionComponent },
   { path: 'motor-detail', component: MotorDetailComponent },
  // { path: 'home', component: HomeComponent },
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(baseRoutes)
  ]
})
export class TwoWheelerModule { }
