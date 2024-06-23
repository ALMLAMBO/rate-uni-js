import { Injectable } from '@angular/core';
import {Review} from "../../models/base/review";
import {BaseService} from "../base/base.service";
import {ReviewRepository} from "../../repositories/review-repository";

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends BaseService<Review> {
  constructor() {
    super(new ReviewRepository());
  }

  getReviewsForDiscipline(disciplineId: string) {
    return (<ReviewRepository>this.baseRepository).getAllReviewsForDiscipline(disciplineId);
  }

  getReviewsForUser(userId: string) {
    return (<ReviewRepository>this.baseRepository).getAllReviewsForUser(userId);
  }

  deleteReview(reviewId: string) {
    this.deleteObject(reviewId);
  }
}
