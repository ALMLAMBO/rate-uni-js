import { BaseRepository } from "./base/base-repository";
import {Review} from "../models/base/review";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ReviewRepository extends BaseRepository<Review>  {
  constructor(private af: AngularFirestore) {
    super(af, environment.reviewCollectionName);
  }

  getAllReviewsForDiscipline(disciplineId: string): Observable<Review[]> {
    return this.angularFirestore
      .collection<Review>(this.collectionName, ref => ref.where('disciplineId', '==', disciplineId))
      .valueChanges();
  }

  getAllReviewsForUser(userId: string): Observable<Review[]> {
    return this.angularFirestore
      .collection<Review>(environment.reviewCollectionName, ref => ref.where('userId', '==', userId))
      .valueChanges()
  }
}
