import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  currentUID:String;
  currentUserData:Observable<User>;
  constructor(private authService : AuthService, private userService: UsersService) {
    this.authService.getCurrent().subscribe( user=> {
      if(user) {
        this.currentUID = user.uid;
        console.log("uid : "+this.currentUID);

        this.currentUserData = this.userService.getCurrentUser(this.currentUID).valueChanges();
        this.currentUserData.subscribe( user => {
          console.log(user.email);
        })
        
      } else {
        this.currentUID = null;
      }
      
    });    
  }

  ngOnInit() {
  }

}
