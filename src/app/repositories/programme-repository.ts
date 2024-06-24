import {BaseRepository} from "./base/base-repository";
import {Programme} from "../models/base/programme";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProgrammeRepository extends BaseRepository<Programme> {
  constructor(private af: AngularFirestore) {
    super(af, environment.programmeCollectionName);
  }

  getAllProgrammesForFaculty(facultyId: string): Observable<Programme[]> {
    return this.angularFirestore
      .collection<Programme>(this.collectionName, ref => ref.where("facultyId", "==", facultyId))
      .valueChanges();
  }
}
