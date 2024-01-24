import { Component, OnInit, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!:any[];
  constructor(private afAuth: AngularFireAuth, private router: Router){

  }

  ngOnInit() {

  }

  async logout() {
    console.log('teste');
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/auth']);
    } catch (error) {
      console.error('Erro ao fazer logout', error);
    }
  }

}
