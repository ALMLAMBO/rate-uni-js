import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router,
              private authService: AuthService) {
    
    console.log('NavbarComponent created!')
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isCurrentUserAdmin();
    this.authService.getCurrentUser()
      .then(user => {
        this.isLoggedIn = user === null;
      });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/'])
      .then(() => console.log('User logged out!'));
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}
