import {BaseRepository} from "./base/base-repository";
import {UserRequest} from "../models/base/user-request";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserRequestRepository extends BaseRepository<UserRequest> {
  constructor() {
    super(environment.userRequestCollectionName);
  }
}
