import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild, Renderer2  } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from "@angular/forms";
import { faPlusCircle, faUpload, faLongArrowAltLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
 
  submitCheckout = this.fb.group({
    name: ['', [Validators.required]],
    lastName:['', [Validators.required]],
    country:['', [Validators.required]],
    street:[''],
    optionalStreet: ['', [Validators.required]],
    region: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
    email:['', [Validators.required]],
    terms: ['', [Validators.required]],
    number:['',  [Validators.required]],
    city: ['', [Validators.required]],
    notes:['']
  })

  submitPay = this.fb.group({
    payWay:['', [Validators.required]]
  })

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
