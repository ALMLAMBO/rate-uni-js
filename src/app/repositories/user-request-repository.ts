import {BaseRepository} from "./base/base-repository";
import {UserRequest} from "../models/base/user-request";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestStatus} from "../vo/request-status";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserRequestRepository extends BaseRepository<UserRequest> {
  constructor(private af: AngularFirestore) {
    super(af, environment.userRequestCollectionName);
  }

  getActiveRequests(): Observable<UserRequest[]> {
    return this.angularFirestore
      .collection<UserRequest>(environment.userRequestCollectionName, ref => ref.where('requestStatus', '==', 'PENDING'))
      .valueChanges();
  }

  updateRequestStatus(requestId: string, status: RequestStatus): void {
    this.angularFirestore
      .collection<UserRequest>(environment.reviewRequestCollectionName)
      .doc(requestId)
      .update({requestStatus: status})
      .then(() => console.log('Request status updated'));
  }

  getUserRequestByUserId(userId: string): Observable<UserRequest[]> {
    return this.angularFirestore
      .collection<UserRequest>(environment.userRequestCollectionName, ref => ref.where('userId', '==', userId))
      .valueChanges();
  }
}
