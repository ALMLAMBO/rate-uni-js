import {ReviewRequest} from "../models/base/review-request";
import {BaseRepository} from "./base/base-repository";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ReviewRequestRepository extends BaseRepository<ReviewRequest> {
  constructor() {
    super(environment.reviewRequestCollectionName);
  }
}
