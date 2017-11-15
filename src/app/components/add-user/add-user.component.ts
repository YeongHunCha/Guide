import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:User = {
    name : "",
    email : "",
    profilePhoto : "",
    spot : ""
  }
  constructor(private userService:UsersService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.addUser(this.user);
    this.user.name = "";
    this.user.email = "";
    this.user.spot = "";
  }

}
