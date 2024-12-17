import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-upload',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './dynamic-upload.component.html',
  styleUrl: './dynamic-upload.component.scss'
})
export class DynamicUploadComponent {
  @Input() config!: any;
  @Input() formGroup!: FormGroup;
  uploadState: 'default' | 'in-progress' | 'success' | 'error' = 'default'; // State management
  uploadProgress: number = 0; // Simulated upload progress
  errorMessage: string = ''; // Error message placeholder

  // Handles file selection
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.resetUpload(); // Reset state
      this.uploadState = 'in-progress'; // Set to in-progress
      const control = this.formGroup.get(this.config.name) as any;
    control.setValue(...control.value, file);
      this.simulateFileUpload(file);
      console.log(control.value,'file');
    }
  }
  onFileDropped(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.handleFileUpload(file);
    }
  }
  // Simulate a file upload process
  simulateFileUpload(file: File) {
    const maxFileSize = 5 * 1024 * 1024; // 5MB

    if (file.size > maxFileSize) {
      this.uploadState = 'error';
      this.errorMessage = 'File size exceeds the allowed limit (5 MB).';
      return;
    }

    // Simulated progress
    const interval = setInterval(() => {
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.uploadState = 'success'; // Upload complete
      } else {
        this.uploadProgress += 10; // Increment progress
      }
    }, 300); // Increment every 300ms
  }
  handleFileUpload(file: File) {debugger
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxFileSize) {
      this.uploadState = 'error';
      this.errorMessage = 'File size exceeds the allowed limit (5 MB).';
      return;
    }
    this.uploadState = 'in-progress';
    const control = this.formGroup.get(this.config.name) as any;
    control.setValue(...control.value, file);
    this.simulateUpload();
    console.log(control.value,'file');
  }

  // Reset upload state
  resetUpload() {
    this.uploadState = 'default';
    this.uploadProgress = 0;
    this.errorMessage = '';
  }
  onDragOver(event: DragEvent) {
    event.preventDefault(); 
    event.stopPropagation();
  }
  simulateUpload() {
    this.uploadProgress = 0;
    const interval = setInterval(() => {
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.uploadState = 'success';
      } else {
        this.uploadProgress += 10;
      }
    }, 300);
  }
}


