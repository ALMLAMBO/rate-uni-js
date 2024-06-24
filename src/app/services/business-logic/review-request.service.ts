import { Injectable } from '@angular/core';
import {ReviewRequest} from "../../models/base/review-request";
import {BaseService} from "../base/base.service";
import {ReviewRequestRepository} from "../../repositories/review-request-repository";
import {RequestStatus} from "../../vo/request-status";

@Injectable({
  providedIn: 'root'
})
export class ReviewRequestService extends BaseService<ReviewRequest> {
  constructor(private reviewRequestRepository: ReviewRequestRepository) {
    super(reviewRequestRepository);
  }

  getReviewRequestByUserId(userId: string) {
    return this.reviewRequestRepository.getReviewRequestByUserId(userId);
  }

  getActiveReviewRequests() {
    return this.reviewRequestRepository.getActiveRequests();
  }

  updateRequestStatus(requestId: string, status: RequestStatus) {
    this.reviewRequestRepository.updateRequestStatus(requestId, status);
  }
}
