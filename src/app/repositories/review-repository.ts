import { BaseRepository } from "./base/base-repository";
import {Review} from "../models/base/review";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

export class ReviewRepository extends BaseRepository<Review>  {
  constructor() {
    super(environment.reviewCollectionName);
  }

  getAllReviewsForDiscipline(disciplineId: string): Observable<Review[]> {
    return this.angularFirestore
      .collection<Review>(this.collectionName, ref => ref.where('disciplineId', '==', disciplineId))
      .valueChanges();
  }
}
