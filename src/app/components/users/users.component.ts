import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // users: User[];
  users:Observable<User[]>;
  editState: boolean = false;
  userToEdit: User;
  constructor(private userService:UsersService) { }
  
  ngOnInit() {
    this.users = this.userService.getUsers();
    // this.userService.getUsers().subscribe(users => {
    //   this.users = users;
    // });
  }

}
