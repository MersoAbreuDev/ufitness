import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/services/firebase-services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  ngOnInit() {}

}
