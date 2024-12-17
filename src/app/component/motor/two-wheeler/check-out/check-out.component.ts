import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from '../../../../dynamic/dynamic-form/dynamic-form.component';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, FormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent implements OnInit {
  currentStep: number = 3;
    constructor(private router: Router, private _sharedService: SharedService, private fb: FormBuilder) {}

    async ngOnInit() {
    // await this.formbuild();
    this._sharedService.emitChange(this.currentStep);
  }

}
