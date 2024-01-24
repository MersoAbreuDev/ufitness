import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/services/firebase-services/firebase.service';
import { UtilsService } from 'src/services/utils/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit  {

  form = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  
  firebase = inject(FirebaseService);
  utilSvc = inject(UtilsService);
  router = inject(Router);
  ngOnInit(){    
  }

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilSvc.loading();
      await loading.present();
      
      this.firebase.signin(this.form.value as User)
        .then((userCredential) => {
          console.log('Usuário autenticado:', userCredential.user);
          // Redirecionar para a página home após o login bem-sucedido
          this.router.navigate(['home']);
        })
        .catch(error => {
          console.log("erro", error)
          this.utilSvc.presentToast({
            message: 'Erro de Login ou Senha, verifique e tente novamente!',
            duration: 2000,
            icon: 'alert-circle-outline',
            position: 'middle',
            color: 'danger'
          })
          console.error('Erro de autenticação:', error.code, error.message);
        }).finally(() => {
          loading.dismiss();
        });
    }

  }
}
