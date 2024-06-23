import { Injectable } from '@angular/core';
import {UserRequest} from "../../models/base/user-request";
import {BaseService} from "../base/base.service";
import {UserRequestRepository} from "../../repositories/user-request-repository";
import {RequestStatus} from "../../vo/request-status";

@Injectable({
  providedIn: 'root'
})
export class UserRequestService extends BaseService<UserRequest> {
  constructor() {
    super(new UserRequestRepository());
  }

  getUserRequestByUserId(userId: string) {
    return (<UserRequestRepository>this.baseRepository).getUserRequestByUserId(userId);
  }

  getActiveUserRequests() {
    return (<UserRequestRepository>this.baseRepository).getActiveRequests();
  }

  updateRequestStatus(requestId: string, status: RequestStatus) {
    (<UserRequestRepository>this.baseRepository).updateRequestStatus(requestId, status);
  }
}
