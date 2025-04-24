import { Injectable } from '@angular/core';
import { Users } from '../modules/users.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: Users[] = [{ "username": "admin", "password": "123", "roles": ['ADMIN'] },
                    { "username": "rayen", "password": "123", "roles": ['USER'] }];
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];
  constructor( private router : Router) { }
  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['user']);
  } //cette methode verifie si  le user est  exixst ou  non  dans la liste elle  retourne comme  resultas un  bolleen
  SignIn(user: Users): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => { // forEach its  a methode etirative like it callback  the function  in  eatsh elemnets in  the array and make a fucntion  in  it
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }
  isAdmin(): Boolean {
    if (!this.roles)
    {
      return false;
    } //this.roles== undefiened
    return (this.roles.indexOf('ADMIN') > -1);
  }
  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }
}
