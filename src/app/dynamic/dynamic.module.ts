import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicRadioComponent } from './dynamic-radio/dynamic-radio.component';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormComponent, // Standalone component
    DynamicTableComponent, // Standalone component
    DynamicInputComponent, // Standalone component
    DynamicRadioComponent, // Standalone component
    DynamicSelectComponent, // Standalone component
  ],
  exports: [
    DynamicFormComponent, // Make it reusable
    DynamicTableComponent,
  ],
})
export class DynamicModule {}
