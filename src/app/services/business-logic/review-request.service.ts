import { Injectable } from '@angular/core';
import {ReviewRequest} from "../../models/base/review-request";
import {BaseService} from "../base/base.service";
import {ReviewRequestRepository} from "../../repositories/review-request-repository";
import {RequestStatus} from "../../vo/request-status";

@Injectable({
  providedIn: 'root'
})
export class ReviewRequestService extends BaseService<ReviewRequest> {
  constructor() {
    super(new ReviewRequestRepository());
  }

  getReviewRequestByUserId(userId: string) {
    return (<ReviewRequestRepository>this.baseRepository).getReviewRequestByUserId(userId);
  }

  getActiveReviewRequests() {
    return (<ReviewRequestRepository>this.baseRepository).getActiveRequests();
  }

  updateRequestStatus(requestId: string, status: RequestStatus) {
    (<ReviewRequestRepository>this.baseRepository).updateRequestStatus(requestId, status);
  }
}
