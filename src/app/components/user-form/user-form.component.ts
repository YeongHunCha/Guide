import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  signupForm: FormGroup;
  detailForm: FormGroup;

  constructor(public authService: AuthService, public fb: FormBuilder) { }

  ngOnInit() {

    this.signupForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
        ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
        ]
      ]
    });

    this.detailForm = this.fb.group({
      'name': ['', [ Validators.required ]],
      'photoUrl': ['', [ Validators.required ]],
      'spot': ['', [ Validators.required ]]
    });

  }

  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get name() { return this.detailForm.get('name'); }
  get photoUrl() { return this.detailForm.get('photoUrl'); }
  get spot() { return this.detailForm.get('spot'); }

  signup(){
    return this.authService.emailSignUp(this.email.value, this.password.value);
  }

  setDetail(user) {
    return this.authService.updateUser(user, {
        name: this.name.value,
        photoUrl: this.photoUrl.value,
        spot: this.spot.value
      });
  }

  logout(){
    return this.authService.logout();
  }
}
