import {Inject, Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from "../../models/base/user";
import {UserService} from "../business-logic/user.service";
import {Role} from "../../vo/role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userService: UserService = Inject(UserService);

  constructor(private afAuth: AngularFireAuth) { }

  register(user: User,
           [universityName, facultyName, programmeName, facultyNumer, image]:
             [string, string, string, string, string]) {
    this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(value => {
        this.userService
          .createUser(value.user?.uid, user,
            [universityName, facultyName, programmeName, facultyNumer, image]);


      })
      .catch(error => {
        console.log(error);
      });
  }

  login(email: string, password: string) {
    if(this.userService.isUserRequestApproved(email)) {
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('User logged in!');
        });
    }
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
