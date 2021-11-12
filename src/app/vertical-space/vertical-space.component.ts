import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-space',
  templateUrl: './vertical-space.component.html',
  styleUrls: ['./vertical-space.component.scss']
})
export class VerticalSpaceComponent implements OnInit {

  @Input() divHeight: string;

  constructor() { }

  ngOnInit(): void {
  }

}
