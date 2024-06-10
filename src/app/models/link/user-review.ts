export class UserReview {
  userId: string;
  reviewId: string;

  constructor(userId: string, reviewId: string) {
    this.userId = userId;
    this.reviewId = reviewId;
  }
}
