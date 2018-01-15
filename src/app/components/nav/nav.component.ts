import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CurrencyPipe } from '@angular/common/src/pipes/number_pipe';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentEmail:String;
  constructor(private authService : AuthService) {
    this.authService.getCurrent().subscribe( user=> {
      if(user) {
        this.currentEmail = user.email;
        console.log("logined! email : "+this.currentEmail);
      } else {
        this.currentEmail = null;
      }
      
    })
  }

  ngOnInit() {
    
  }

  logout(){
    return this.authService.logout();
  }

}
