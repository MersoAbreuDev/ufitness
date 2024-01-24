import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.scss'],
})
export class CustomTitleComponent  implements OnInit {
  @Input() type!:number;
  @Input() title!:string;
  constructor() { }

  ngOnInit() {}

}
