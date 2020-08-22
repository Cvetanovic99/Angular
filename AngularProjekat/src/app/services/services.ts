import { Injectable } from '@angular/core' 
@Injectable()

export class Service {
    user;
    user354 = {
        name: "Ime",
        surname: "Prezime",
        password: "Sifra"
    }    
  constructor() {
     
  }

  isLogIn(): boolean{
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user != null)
      return true;
    else 
      return false;
  }

  logIn() {
    localStorage.setItem('user', JSON.stringify(this.user354));
  }

  logOut() {
    localStorage.removeItem('user');
  }

    
}