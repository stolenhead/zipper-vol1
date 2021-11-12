import { Component, OnInit,ChangeDetectorRef, ElementRef, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from "@angular/forms";
import { faPlusCircle, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent implements OnInit {

  plus = faPlusCircle;
  star = faStar;
  showNameForm: boolean = false;
  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  uploadForm = this.fb.group({
    file: [null]
  })

  uploaNameForm = this.fb.group({
    name: [null]
  })

  @ViewChild('fileInput') el:ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  submitted:boolean = false;
  
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.uploadForm.patchValue({
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
    this.uploadForm.patchValue({
      file: [null]
    });
  }

  onSubmit() {
    this.submitted = true;
    if(!this.uploadForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      console.log(this.uploadForm.value)
    }
  }

  ngOnInit(): void {
  }

}
