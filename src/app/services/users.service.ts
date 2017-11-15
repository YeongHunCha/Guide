import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  userDoc:AngularFirestoreDocument<User>;
  usersCollection:AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(private afs:AngularFirestore) {
    // this.users = this.afs.collection('Users').valueChanges();
    this.usersCollection = this.afs.collection('Users');

    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getUsers(){
    return this.users;
  }

  addUser(user:User){
    return this.usersCollection.add(user);
  }

  deleteUser(user:User){
    this.userDoc = this.afs.doc(`Users/${user.id}`);
    this.userDoc.delete();
  }

}