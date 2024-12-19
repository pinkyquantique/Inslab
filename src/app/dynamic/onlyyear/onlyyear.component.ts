import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-onlyyear',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './onlyyear.component.html',
  styleUrl: './onlyyear.component.scss'
})
export class OnlyyearComponent  implements OnInit{
   @Input() config!: any;
    @Input() formGroup!: FormGroup;
   
  
  years: number[] = [];
  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 5; i <= currentYear + 50; i++) {
      this.years.push(i);
    }
}
}
