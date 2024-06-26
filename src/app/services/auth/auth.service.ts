import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from "../../models/base/user";
import {UserService} from "../business-logic/user.service";
import {Role} from "../../vo/role";
import CryptoJS from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth,
              private userService: UserService) {
  }

  register(user: User,
           [universityName, facultyName, programmeName, facultyNumber]:
             [string, string, string, string]) {
    this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(value => {
        user.role = Role.STUDENT;
        user.password = CryptoJS.SHA3(user.password).toString();
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
        localStorage.setItem('userId', value.user?.uid!);
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
        localStorage.removeItem('userId');
      });
  }

  getCurrentUser() {
    return this.afAuth.currentUser;
  }
}
