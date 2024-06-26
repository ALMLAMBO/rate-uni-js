import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {UserService} from "../services/business-logic/user.service";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from "../models/base/user";
import {AuthService} from "../services/auth/auth.service";
import {Role} from "../vo/role";

@Injectable({
  providedIn: 'root'

})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
              private authService: AuthService, 
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    const requiredRoles = next.data['roles'] || [];
    let currentUser: any;
    this.authService.getCurrentUser()
      .then(user => {
        currentUser = user;
      });

    if (!currentUser) {
      return of(this.router.parseUrl('/login'));
    }

    let dbUser: User = {} as User;
    this.userService.getObjectById(currentUser.uid)
      .subscribe(user => dbUser = user);
    
    if ((this.router.url.includes('update') || this.router.url.includes('statistics') 
        || this.router.url.includes(('create-university')) || this.router.url.includes('create-faculty') 
        || this.router.url.includes('create-programme') || this.router.url.includes('create-discipline'))
      && dbUser.role === Role.ADMIN) {
      
      return true;
    } 
    else if ((this.router.url.includes('create-review') || this.router.url.includes('user-details')) 
      && dbUser.role === Role.STUDENT) {
      
      return true;
    }
    else {
      return of(this.router.parseUrl('/unauthorized'));
    }
  }
}
