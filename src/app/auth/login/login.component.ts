import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {LoginService} from "../../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  constructor(private auth: AngularFireAuth, private router: Router, private loginService: LoginService) {}

  async login() {
    try {
      await this.auth.signInWithEmailAndPassword(this.email, this.password);
      this.loginService.isSignedIn = true;
      this.router.navigate(['/panel']);

    } catch (error) {
      console.log(error);
    }
  }
}
