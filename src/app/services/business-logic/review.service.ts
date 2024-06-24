import { Injectable } from '@angular/core';
import {Review} from "../../models/base/review";
import {BaseService} from "../base/base.service";
import {ReviewRepository} from "../../repositories/review-repository";

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends BaseService<Review> {
  constructor(private reviewRepository: ReviewRepository) {
    super(reviewRepository);
  }

  getLatest6Reviews() {
    return this.reviewRepository.getLatest6Reviews();
  }
  
  getReviewsForDiscipline(disciplineId: string) {
    return this.reviewRepository.getAllReviewsForDiscipline(disciplineId);
  }

  getReviewsForUser(userId: string) {
    return this.reviewRepository.getAllReviewsForUser(userId);
  }

  deleteReview(reviewId: string) {
    this.deleteObject(reviewId);
  }
}
