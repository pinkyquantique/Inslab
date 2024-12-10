import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';


export const baseRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ForgetComponent },
]

  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(baseRoutes)
    ]
  })



export class AuthModule { }
