import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from "@angular/forms";
import { faPlusCircle, faStar, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  back = faLongArrowAltLeft;
  createAccount: boolean = false;
  
  loginForm = this.fb.group({
    email:['', [Validators.required]],
    password:['', [Validators.required]]
  })

  signUpForm = this.fb.group({
    name: ['', [Validators.required]],
    email:['', [Validators.required]],
    password:['',  [Validators.required]]
  })

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
