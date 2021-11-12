import { Component, OnInit } from '@angular/core';
import { faCalendar, faHeart, faUserCircle, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import { Product } from '../models/product';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  coverImg =  "../../assets/images/landing/welcome_1.jpg"

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }

}
