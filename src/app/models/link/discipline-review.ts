export class DisciplineReview {
  reviewId: string;
  disciplineId: string;

  constructor(reviewId: string, disciplineId: string) {
    this.reviewId = reviewId;
    this.disciplineId = disciplineId;
  }
}
