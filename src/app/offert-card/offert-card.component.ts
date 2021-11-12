import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { faCalendar, faHeart, faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offert-card',
  templateUrl: './offert-card.component.html',
  styleUrls: ['./offert-card.component.scss']
})
export class OffertCardComponent implements OnInit {
  @Input() data: Product;

  heart = faHeart;
  constructor() { }

  ngOnInit(): void {
  }

}
