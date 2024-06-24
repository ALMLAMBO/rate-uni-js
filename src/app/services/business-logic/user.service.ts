import {Inject, Injectable} from '@angular/core';
import {User} from "../../models/base/user";
import {BaseService} from "../base/base.service";
import {UserRepository} from "../../repositories/user-repository";
import {UserRequestService} from "./user-request.service";
import {UserRequest} from "../../models/base/user-request";
import {RequestStatus} from "../../vo/request-status";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  private userRequestService: UserRequestService = Inject(UserRequestService);

  constructor(private userRepository: UserRepository) {
    super(userRepository);
  }

  getUserByEmail(email: string) {
    return this.userRepository.getUserByEmail(email);
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
      this.userRepository.createObject(userId, user);
      this.userRequestService.createObject(
        new UserRequest('', userId, user.username, universityName,
          facultyName, programmeName, facultyNumer, RequestStatus.PENDING, image, new Date()));
    }
  }
}
