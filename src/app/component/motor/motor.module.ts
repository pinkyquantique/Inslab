import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleSelectionComponent } from './vehicle-selection/vehicle-selection.component';

export const baseRoutes: Routes =[
  // { path: 'vehicleselection', component: VehicleSelectionComponent },
   { path: 'vehicleselection', component: VehicleSelectionComponent },
   { path: 'two-wheeler',loadChildren: () => import('./two-wheeler/two-wheeler.module').then(m => m.TwoWheelerModule)} 
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(baseRoutes)
  ]
})
export class MotorModule { }
