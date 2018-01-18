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
  cud:User;
  isEdit:boolean = false;
  constructor(private authService : AuthService, private userService: UsersService) {
    this.authService.getCurrent().subscribe( user=> {
      if(user) {
        this.currentUID = user.uid;
        console.log("uid : "+this.currentUID);

        this.currentUserData = this.userService.getCurrentUser(this.currentUID).valueChanges();
        this.currentUserData.subscribe( user => {
          console.log(user);
          this.cud = user;
        })
        
      } else {
        this.currentUID = null;
      }
      
    });    
  }

  ngOnInit() {
  }

  edit() {
    this.isEdit = true;
  }

  submit() {
    this.userService.updateUser(this.cud);
    alert("수정하였습니다.");
    this.isEdit = false;
  }

  editCancel() {
    this.isEdit = false;
  }

}
