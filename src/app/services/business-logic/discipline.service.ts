import {Inject, Injectable} from '@angular/core';
import {Discipline} from "../../models/base/discipline";
import {BaseService} from "../base/base.service";
import {DisciplineRepository} from "../../repositories/discipline-repository";
import {ReviewService} from "./review.service";
import {Observable} from "rxjs";
import {Programme} from "../../models/base/programme";

@Injectable({
  providedIn: 'root'
})
export class DisciplineService extends BaseService<Discipline> {
  private reviewService: ReviewService = Inject(ReviewService);

  constructor(private disciplineRepository: DisciplineRepository) {
    super(disciplineRepository);
  }

  getDisciplinePorgramme(reviewId: string, disciplineId: string): Observable<Programme> {
    return this.disciplineRepository.getDisciplinePorgramme(reviewId, disciplineId);
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
