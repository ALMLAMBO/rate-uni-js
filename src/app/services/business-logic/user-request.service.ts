import { Injectable } from '@angular/core';
import {UserRequest} from "../../models/base/user-request";
import {BaseService} from "../base/base.service";
import {UserRequestRepository} from "../../repositories/user-request-repository";
import {RequestStatus} from "../../vo/request-status";

@Injectable({
  providedIn: 'root'
})
export class UserRequestService extends BaseService<UserRequest> {
  constructor(private userRequestRepository: UserRequestRepository) {
    super(userRequestRepository);
  }

  getUserRequestByUserId(userId: string) {
    return this.userRequestRepository.getUserRequestByUserId(userId);
  }

  getActiveUserRequests() {
    return this.userRequestRepository.getActiveRequests();
  }

  updateRequestStatus(requestId: string, status: RequestStatus) {
    this.userRequestRepository.updateRequestStatus(requestId, status);
  }
}
