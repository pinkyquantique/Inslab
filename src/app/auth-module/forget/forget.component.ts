import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';  
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  providers: [DatePipe],
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent {
  formGroup!: FormGroup;currentDateTimeFormatted:any = null;
  isValidModalVisible: boolean = false;isInvalidModalVisible: boolean = false; 

  constructor(private fb: FormBuilder,public router:Router,private datePipe: DatePipe) { }

  async ngOnInit(): Promise<void> {
    const currentDateTime = new Date();
    // Formatting the current date and time
    this.currentDateTimeFormatted = this.datePipe.transform(currentDateTime, 'yyyy-MM-dd HH:mm:ss')!;
    await this.formBuild();
  }

  async formBuild() {
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      IKey:[this.currentDateTimeFormatted,[Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.formGroup.controls; }

  get email() {
    return this.formGroup.get('email');
  }

  async onSubmit(){
    var res="success";
    if (this.formGroup.invalid) {
      
      return;
    }
    const obj = {
      UserEmail: this.formGroup.controls["email"].value,
      IKey: this.formGroup.controls["IKey"].value
    }
    console.log(obj); 
    if(res=="success"){
      this.isValidModalVisible = true;
    }
    else{
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
