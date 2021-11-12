import { Component, OnInit } from '@angular/core';
import {  faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  close = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
