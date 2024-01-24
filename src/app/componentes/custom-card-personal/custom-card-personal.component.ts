import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card-personal',
  templateUrl: './custom-card-personal.component.html',
  styleUrls: ['./custom-card-personal.component.scss'],
})
export class CustomCardComponent  implements OnInit {

  @Input() url!: string;
  @Input() alt!: string;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  
  constructor() { }

  ngOnInit() {}

}
