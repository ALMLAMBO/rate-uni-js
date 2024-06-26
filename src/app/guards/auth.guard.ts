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
import {Role} from "../vo/role";

@Injectable({
  providedIn: 'root'

})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) {}
  
  currentUser: User = {} as User;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    
    let userId: string | null = localStorage.getItem('userId');

    if (!userId) {
      return of(this.router.parseUrl('/login'));
    }
    
    this.userService.getObjectById(userId)
      .subscribe(user => this.currentUser = user);
    
    let url = next.url
      .map(segment => segment.path)
      .join('/')
      .trim();
    
    console.log(url);
    console.log(this.currentUser.role);
    if ((url.includes('statistics') || url.includes('update') 
      || url.includes('create-uni') || url.includes('create-faculty')
      || url.includes('create-programme') || url.includes('create-discipline'))
      && this.currentUser.role === Role.ADMIN) {
      return true;
    }
    else if((url.includes('create-review') || url.includes('user-details')) && this.currentUser.role === Role.STUDENT) {
      return true;
    }
    else {
      return of(this.router.parseUrl('/unauthorized'));
    }
  }
}
