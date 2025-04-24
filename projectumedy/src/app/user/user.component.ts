import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../modules/users.model';
import { AuthService } from '../servives/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  user =new Users();
  error : boolean = false;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
  }
  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['produits']);
    else
      this.error=true;
      //alert('Login ou mot de passe incorrecte!');
  }


}
