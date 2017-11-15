import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  editState: boolean = false;
  userToEdit: User;
  constructor(private userService:UsersService) { }
  

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(event, user){
    this.clearState();
    this.userService.deleteUser(user);
  }

  updateUser(user:User){
    this.clearState();
    this.userService.updateUser(user);
  }

  editUser(event, user){
    this.editState = true;
    this.userToEdit = user;
  }

  clearState(){
    this.editState = false;
    this.userToEdit = null;
  }

}
