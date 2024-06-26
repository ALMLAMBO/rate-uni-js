import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/business-logic/user.service";
import {Role} from "../../../vo/role";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  userId: string | null = '';

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) {

    console.log('NavbarComponent created!')
  }
  
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.isLoggedIn = true;
      this.userService.getObjectById(this.userId)
        .subscribe(user => {
          if (user.role === Role.ADMIN) {
            this.isAdmin = true;
          }
        });
    }
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/'])
      .then(() => console.log('User logged out!'));
    this.isLoggedIn = false;
    this.isAdmin = false;
    localStorage.removeItem('userId');
  }
}
