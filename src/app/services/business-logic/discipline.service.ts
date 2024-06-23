import {Inject, Injectable} from '@angular/core';
import {Discipline} from "../../models/base/discipline";
import {BaseService} from "../base/base.service";
import {DisciplineRepository} from "../../repositories/discipline-repository";
import {ReviewService} from "./review.service";

@Injectable({
  providedIn: 'root'
})
export class DisciplineService extends BaseService<Discipline> {
  private reviewService: ReviewService = Inject(ReviewService);

  constructor() {
    super(new DisciplineRepository());
  }

  getDisciplinesForProgramme(programmeId: string) {
    return (<DisciplineRepository>this.baseRepository).getAllDisciplinesForProgramme(programmeId);
  }

  deleteDiscipline(disciplineId: string) {
    this.deleteObject(disciplineId);
    this.reviewService.getReviewsForDiscipline(disciplineId)
      .subscribe(reviews => {
        reviews.forEach(review => {
          this.reviewService.deleteReview(review.id);
        });
      })
  }
}
