import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    let loggedIn = false;
    this.isAdmin = this.authService.isCurrentUserAdmin();
    this.authService.getCurrentUser()
      .then(user => {
        loggedIn = user === null;
      });
    
    this.isLoggedIn = loggedIn;
    console.log(this.isLoggedIn);
  }

  logOut() {
    this.authService.logout();
  }
}
