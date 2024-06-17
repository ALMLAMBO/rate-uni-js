import {BaseRepository} from "./base/base-repository";
import {Discipline} from "../models/base/discipline";
import {environment} from "../../environments/environment.development";
import {Observable, of} from "rxjs";
import {Review} from "../models/base/review";
import {DisciplineReview} from "../models/link/discipline-review";
import {ReviewRepository} from "./review-repository";
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DisciplineRepository extends BaseRepository<Discipline> {
  reviewRepository: ReviewRepository = Inject(ReviewRepository);

  constructor() {
    super(environment.disciplineCollectionName);
  }

  getAllDisciplinesForProgramme(programmeId: string): Observable<Discipline[]> {
    return this.angularFirestore
      .collection<Discipline>(this.collectionName, ref => ref.where("programmeId", "==", programmeId))
      .valueChanges();
  }

  getReviewsForDiscipline(disciplineId: string): Observable<Review[]> {
    let reviews: Review[] = [];

    this.angularFirestore
      .collection<DisciplineReview>(this.collectionName, ref => {
        return ref.where('disciplineId', '==', disciplineId)
          .where('status', '==', 'approved')
      })
      .valueChanges()
      .subscribe(disciplineReviews => {
        return disciplineReviews.map(disciplineReview => {
          this.reviewRepository
            .getObject(disciplineReview.reviewId)
            .subscribe(review => {
              reviews.push(review);
            });
        });
      })

    return of(reviews);
  }
}
