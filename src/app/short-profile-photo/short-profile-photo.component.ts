import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-short-profile-photo',
  templateUrl: './short-profile-photo.component.html',
  styleUrls: ['./short-profile-photo.component.scss']
})
export class ShortProfilePhotoComponent implements OnInit {

  star= faStar;
  
  constructor() { }

  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  
  ngOnInit(): void {
  }

}
