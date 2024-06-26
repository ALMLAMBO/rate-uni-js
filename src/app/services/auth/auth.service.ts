import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from "../../models/base/user";
import {UserService} from "../business-logic/user.service";
import {Role} from "../../vo/role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth,
              private userService: UserService) {
  }

  register(user: User,
           [universityName, facultyName, programmeName, facultyNumber]:
             [string, string, string, string, string]) {
    this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(value => {
        this.userService
          .createUser(value.user?.uid, user,
            [universityName, facultyName, programmeName, facultyNumber]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(email: string, password: string) : boolean {
    let loggedIn: boolean = false;
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log("User logged in");
        this.userService.getObjectById(value.user?.uid!)
          .subscribe(user => {
            if (user.role === Role.ADMIN) {
              loggedIn = true;
              return;
            }

            if (this.userService.isUserRequestApproved(email)) {
              loggedIn = true;
              return;
            }
          });
      });
    
    return loggedIn;
  }

  logout() {
    this.afAuth
      .signOut()
      .then(value => {

      });
  }

  getCurrentUser() {
    return this.afAuth.currentUser;
  }

  isCurrentUserAdmin() {
    let isAdmin: boolean = false;
    this.getCurrentUser()
      .then(user => {
        if (user) {
          this.userService
            .getObjectById(user.uid)
            .subscribe(user => {
              isAdmin = user.role === Role.ADMIN;
            });
        }
      })

    return isAdmin;
  }
}
