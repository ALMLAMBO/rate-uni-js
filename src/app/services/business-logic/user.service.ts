import {Inject, Injectable} from '@angular/core';
import {User} from "../../models/base/user";
import {BaseService} from "../base/base.service";
import {UserRepository} from "../../repositories/user-repository";
import {UserRequestService} from "./user-request.service";
import {UserRequest} from "../../models/base/user-request";
import {randomUUID} from "node:crypto";
import {RequestStatus} from "../../vo/request-status";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  private userRequestService: UserRequestService = Inject(UserRequestService);

  constructor() {
    super(new UserRepository());
  }

  getUserByEmail(email: string) {
    return (<UserRepository>this.baseRepository).getUserByEmail(email);
  }

  isUserRequestApproved(email: string) {
    let approved = false;

    this.getUserByEmail(email)
      .subscribe((users: User[]) => {
        users.forEach((user: User) => {
          this.userRequestService.getUserRequestByUserId(user.id)
            .subscribe((userRequests: UserRequest[]) => {
              userRequests.forEach((userRequest: UserRequest) => {
                if (userRequest.requestStatus === RequestStatus.APPROVED) {
                  approved = true;
                }
              });
            });
        });
      });

    return approved;
  }

  createUser(userId: string | undefined, user: User,
             [universityName, facultyName, programmeName, facultyNumer, image]:
               [string, string, string, string, string]) {

    if (userId) {
      (<UserRepository>this.baseRepository).createObject(userId, user);
      this.userRequestService.createObject(
        new UserRequest(randomUUID(), userId, user.username, universityName,
          facultyName, programmeName, facultyNumer, RequestStatus.PENDING, image, new Date()));
    }
  }
}
