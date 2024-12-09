import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';




  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent },
        { path: 'reset', component: ForgetComponent },
      ])
    ]
  })



export class AuthModule { }
