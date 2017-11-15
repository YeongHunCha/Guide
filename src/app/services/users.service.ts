import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  usersCollection:AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(private afs:AngularFirestore) {
    this.users = this.afs.collection('Users').valueChanges();
  }

  getUsers(){
    return this.users;
  }

}