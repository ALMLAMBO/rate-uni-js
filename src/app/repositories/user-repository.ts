import {BaseRepository} from "./base/base-repository";
import {User} from "../models/base/user";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(environment.userCollectionName);
  }
}
