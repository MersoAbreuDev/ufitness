import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card-programs',
  templateUrl: './custom-card-programs.component.html',
  styleUrls: ['./custom-card-programs.component.scss'],
})
export class CustomCardProgramsComponent  implements OnInit {

  @Input() url!: string;
  @Input() alt!: string;
  @Input() text!: string;

  constructor() { }

  ngOnInit() {}

}
