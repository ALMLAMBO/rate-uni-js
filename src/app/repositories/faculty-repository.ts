import {BaseRepository} from "./base/base-repository";
import {Faculty} from "../models/base/faculty";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FacultyRepository extends BaseRepository<Faculty> {
  constructor(private af: AngularFirestore) {
    super(af, environment.facultyCollectionName);
  }

  getFacultiesForUniversity(universityId: string): Observable<Faculty[]> {
    return this.angularFirestore
      .collection<Faculty>(this.collectionName, ref => ref.where("universityId", "==", universityId))
      .valueChanges();
  }
}
