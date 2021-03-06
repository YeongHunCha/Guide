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
    this.usersCollection = this.afs.collection('users');
    
    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        return data;
      });
    });
  }

  getUsers(){
    return this.users;
  }

  getCurrentUser(path:String){
    return this.userDoc = this.afs.doc('users/'+path);
  }

  // addUser(user:User){
  //   return this.usersCollection.add(user);
  // }
  // 
  // deleteUser(user:User){
  //   this.userDoc = this.afs.doc(`Users/${user.id}`);
  //   this.userDoc.delete();
  // }
  // 
  updateUser(user:User){
    this.userDoc = this.afs.doc(`users/${user.uid}`);
    this.userDoc.update(user);
  }

}