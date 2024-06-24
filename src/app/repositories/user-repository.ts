import {BaseRepository} from "./base/base-repository";
import {User} from "../models/base/user";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserRequest} from "../models/base/user-request";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserRepository extends BaseRepository<User> {
  constructor(private af: AngularFirestore) {
    super(af, environment.userCollectionName);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.angularFirestore
      .collection<User>(this.collectionName, ref => ref.where('email', '==', email))
      .valueChanges();
  }
}
