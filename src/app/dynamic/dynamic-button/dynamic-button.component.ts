import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-button',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-button.component.html',
  styleUrl: './dynamic-button.component.css'
})
export class DynamicButtonComponent {
  @Input() config!: any;
}
