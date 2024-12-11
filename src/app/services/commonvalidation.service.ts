import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {

  constructor() { }

  static required(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { required: true };
  }


  static email(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(control.value) ? null : { email: true };
  }


  static minLength(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length >= min
        ? null
        : { minlength: { requiredLength: min, actualLength: control.value.length } };
    };
  }


  static maxLength(max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length <= max
        ? null
        : { maxlength: { requiredLength: max, actualLength: control.value.length } };
    };
  }


  static numeric(control: AbstractControl): ValidationErrors | null {
    const numericRegex = /^\d+$/;
    return numericRegex.test(control.value) ? null : { numeric: true };
  }

 
  static alphabet(control: AbstractControl): ValidationErrors | null {
    const alphabetRegex = /^[A-Za-z]+$/;
    return alphabetRegex.test(control.value) ? null : { alphabet: true };
  }


  static alphanumeric(control: AbstractControl): ValidationErrors | null {
    const alphanumericRegex = /^[A-Za-z0-9]+$/;
    return alphanumericRegex.test(control.value) ? null : { alphanumeric: true };
  }


  static pattern(pattern: string | RegExp) {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = new RegExp(pattern);
      return regex.test(control.value) ? null : { pattern: true };
    };
  }

  static matchFields(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control1 = formGroup.get(field1);
      const control2 = formGroup.get(field2);
      if (control1 && control2 && control1.value !== control2.value) {
        return { mismatch: true };
      }
      return null;
    };
  }


  static async valueExists(control: AbstractControl, existingValues: string[]): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (existingValues.includes(control.value)) {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 500);
    });
  }
}
