import {BaseRepository} from "./base/base-repository";
import {Faculty} from "../models/base/faculty";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

export class FacultyRepository extends BaseRepository<Faculty> {
  constructor() {
    super(environment.facultyCollectionName);
  }

  getFacultiesForUniversity(universityId: string): Observable<Faculty[]> {
    return this.angularFirestore
      .collection<Faculty>(this.collectionName, ref => ref.where("universityId", "==", universityId))
      .valueChanges();
  }
}
