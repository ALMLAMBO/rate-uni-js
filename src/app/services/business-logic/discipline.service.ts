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

  constructor(private disciplineRepository: DisciplineRepository) {
    super(disciplineRepository);
  }

  getDisciplinesForProgramme(programmeId: string) {
    return this.disciplineRepository.getAllDisciplinesForProgramme(programmeId);
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
