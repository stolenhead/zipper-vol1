import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from "@angular/forms";
import { faPlusCircle, faStar, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-author-profile',
  templateUrl: './edit-author-profile.component.html',
  styleUrls: ['./edit-author-profile.component.scss']
})
export class EditAuthorProfileComponent implements OnInit {

  plus = faPlusCircle;
  back = faLongArrowAltLeft;
  editProfileForm = this.fb.group({
    name: ['', [Validators.required]],
    userName:['', [Validators.required]],
    wsspLink:['', [Validators.required]],
    bio:[''],
    email:['', [Validators.required]],
    number:[''],
    country: ['']

  })

  editPhoto = this.fb.group({
    file: [null]
  })

  @ViewChild('fileInput') el:ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  submitted:boolean = false;

  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.editPhoto.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();        
    }
  }

  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.editPhoto.patchValue({
      file: [null]
    });
  }

  onSubmit() {
    this.submitted = true;
    if(!this.editPhoto.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      console.log(this.editPhoto.value)
    }
  }

}
