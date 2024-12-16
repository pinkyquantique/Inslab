import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  providers: [DatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  formGroup!: FormGroup;currentDateTimeFormatted:any = null;

  constructor(private fb: FormBuilder,public authService:AuthService,public router:Router,
    private datePipe: DatePipe
  ){}

  ngOnInit(){
    const currentDateTime = new Date();
    // Formatting the current date and time
    this.currentDateTimeFormatted = this.datePipe.transform(currentDateTime, 'yyyy-MM-dd HH:mm:ss')!;
    if (typeof localStorage !== 'undefined'){
      localStorage.clear();
    }
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      IKey:[this.currentDateTimeFormatted,[Validators.required, Validators.minLength(8)]]
    });
    if(this.authService.user && this.authService.token){
      this.router.navigate(["/"])
    }
  }
  get password() {
    return this.formGroup.get('password');
  }
  get email() {
    return this.formGroup.get('email');
  }
  async login() {
    if (this.formGroup.invalid) {
      return;
    }
    const loginForm = {
      UserEmail: this.formGroup.controls["email"].value,
      Password: this.formGroup.controls["password"].value,
      IKey: this.formGroup.controls["IKey"].value
    }
    console.log(loginForm);
    // this.authService.login(this.email, this.password).subscribe((resp:any)=>{

    //   if(!resp.error && resp){
    //     document.location.reload();
    //   }
    //   else{
    //     if(resp.error.error == 'Unauthorized'){
    //       alert("No Entry");
    //       return;
    //     }
    //   }


    // })
  }
}
