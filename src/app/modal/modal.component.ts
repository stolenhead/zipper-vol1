import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild, Renderer2  } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from "@angular/forms";
import { faPlusCircle, faUpload, faLongArrowAltLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  back= faLongArrowAltLeft;
  plus = faPlusCircle;
  upload = faUpload;
  close = faTimesCircle ;

  submitPhoto = this.fb.group({
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

  images: any = [];
  imageUrl: any = '';

  editFile: boolean = true;
  removeUpload: boolean = false;
  private submitted:boolean = false;
  private photoUpload:boolean =false;
  nextStep:boolean = false;
  
  @ViewChild('filePhoto') el:ElementRef;

  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private renderer: Renderer2,
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
        this.images.push(reader.result);

        this.editPhoto.patchValue({
          file: reader.result
        });
        this.photoUpload= true;
        console.log('pororo')
        const sideElement = document.getElementById('imagePreviewModal');
        const preview = document.getElementById('modalSubmitPhotoBox');
        if(this.photoUpload){
          this.renderer.addClass(sideElement, 'show');
          this.renderer.addClass(preview, 'show')
        }else{
          console.log('llala')
          this.renderer.removeClass(sideElement,'show');
          this.renderer.removeClass(preview,'show');
        }
        
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();        
    }
  }

  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = '';
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
      console.log('kkk')
    }
  }
}
