import {BaseRepository} from "./base/base-repository";
import {UserRequest} from "../models/base/user-request";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestStatus} from "../vo/request-status";
import {ReviewRequest} from "../models/base/review-request";

@Injectable({
  providedIn: 'root'
})
export class UserRequestRepository extends BaseRepository<UserRequest> {
  constructor() {
    super(environment.userRequestCollectionName);
  }

  getActiveRequests(): Observable<UserRequest[]> {
    return this.angularFirestore
      .collection<UserRequest>(environment.userRequestCollectionName, ref => ref.where('requestStatus', '==', 'PENDING'))
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
