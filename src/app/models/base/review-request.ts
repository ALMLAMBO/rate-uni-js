import { RequestStatus } from "../../vo/request-status";

export class ReviewRequest {
  id: string;
  userId: string;
  reviewId: string;
  requestStatus: RequestStatus;

  constructor(id: string, userId: string, reviewId: string, requestStatus: RequestStatus) {
    this.id = id;
    this.userId = userId;
    this.reviewId = reviewId;
    this.requestStatus = requestStatus;
  }
}
