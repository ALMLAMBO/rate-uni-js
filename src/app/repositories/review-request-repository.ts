import {ReviewRequest} from "../models/base/review-request";
import {BaseRepository} from "./base/base-repository";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestStatus} from "../vo/request-status";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ReviewRequestRepository extends BaseRepository<ReviewRequest> {
  constructor(private af: AngularFirestore) {
    super(af, environment.reviewRequestCollectionName);
  }

  getActiveRequests(): Observable<ReviewRequest[]> {
    return this.angularFirestore
      .collection<ReviewRequest>(environment.reviewRequestCollectionName, ref => ref.where('requestStatus', '==', 'PENDING'))
      .valueChanges();
  }

  updateRequestStatus(requestId: string, status: RequestStatus): void {
    this.angularFirestore
      .collection<ReviewRequest>(environment.reviewRequestCollectionName)
      .doc(requestId)
      .update({requestStatus: status})
      .then(() => console.log('Request status updated'));
  }

  getReviewRequestByUserId(userId: string): Observable<ReviewRequest[]> {
    return this.angularFirestore
      .collection<ReviewRequest>(environment.reviewRequestCollectionName, ref => ref.where('userId', '==', userId))
      .valueChanges();
  }
}
