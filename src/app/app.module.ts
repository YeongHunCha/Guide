import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { UsersService } from './services/users.service';



import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'guide'),
    AngularFirestoreModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
