import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  secondName: string;
  email: string;
  password: string;
  success = false;

  constructor(private registration: RegistrationService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const user = new User();
    user.email = this.email;
    user.firstname = this.firstName;
    user.lastname = this.secondName;
    user.password = this.password;
    this.registration.reg(user).subscribe(data => {
      console.log('Success');
      this.success = true ;
    });
  }
}
