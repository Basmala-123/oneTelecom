import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  isSignedIn = false;
  constructor() { }
}
