import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesclientsService } from '../servives/servicesclients.service';
import { User } from '../modules/user.model';

@Component({
  selector: 'app-signup',
  imports : [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  user : User = new User();
  constructor(private router: Router , private serviceclient : ServicesclientsService) { }
  signup() {
    this.serviceclient.addclient(this.user).subscribe(us=>{
      console.log("rayenselmen kbri");
      const conf=confirm("are you  sure?");
      if(conf)
      {
        console.log("the new user is :" + this.user);
        this.user = us;
        this.router.navigate(['/produits']);
      }
    })
  }
}
