import { Component, OnInit } from '@angular/core';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.scss']
})
export class BidsComponent implements OnInit {

  add = faPlusCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
