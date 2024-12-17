import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-personal-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-detail.component.html',
  styleUrl: './personal-detail.component.css'
})
export class PersonalDetailComponent implements OnInit{
  currentStep: number = 3;
   constructor(private router: Router,private _sharedService: SharedService,){
       
      }
  async ngOnInit() {
    this._sharedService.emitChange(this.currentStep);
  }
}
