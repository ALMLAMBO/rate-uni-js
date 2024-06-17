import {ReviewRequest} from "../models/base/review-request";
import {BaseRepository} from "./base/base-repository";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestStatus} from "../vo/request-status";

@Injectable({
  providedIn: 'root'
})
export class ReviewRequestRepository extends BaseRepository<ReviewRequest> {
  constructor() {
    super(environment.reviewRequestCollectionName);
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
}
