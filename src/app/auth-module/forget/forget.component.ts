import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent {
  email: string = '';  
  isValidModalVisible: boolean = false;  
  isInvalidModalVisible: boolean = false;  

  onSubmit() {
    if (this.email.includes('@')) {
      this.isValidModalVisible = true;
    } else {
    
      this.isInvalidModalVisible = true;
    }
  }
  closeValidModal() {
    this.isValidModalVisible = false; 
  }
  closeInvalidModal() {
    this.isInvalidModalVisible = false;
  }
}
