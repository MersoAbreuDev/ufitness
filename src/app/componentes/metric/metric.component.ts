import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss'],
})
export class MetricComponent  implements OnInit {
  @Input() icon!:string;
  @Input() link!:string;
  @Input() text!:string;
  @Input() position!:string;
  constructor() { }

  ngOnInit() {}

}
