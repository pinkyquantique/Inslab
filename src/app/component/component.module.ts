import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
export const baseRoutes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
 
]

// const COMPONENTS:
//   any[] =
//   [HeaderComponent
//   ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(baseRoutes)
  ]
})
export class ComponentModule { }
