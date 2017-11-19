import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'guide'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
