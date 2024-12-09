import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';



@NgModule({ 
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DynamicFormComponent, DynamicTableComponent, DynamicInputComponent],
  exports: [DynamicFormComponent, DynamicTableComponent]
})
export class DynamicModule {
  
 }
