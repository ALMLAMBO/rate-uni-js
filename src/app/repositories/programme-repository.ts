import {BaseRepository} from "./base/base-repository";
import {Programme} from "../models/base/programme";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

export class ProgrammeRepository extends BaseRepository<Programme> {
  constructor() {
    super(environment.programmeCollectionName);
  }

  getAllProgrammesForFaculty(facultyId: string): Observable<Programme[]> {
    return this.angularFirestore
      .collection<Programme>(this.collectionName, ref => ref.where("facultyId", "==", facultyId))
      .valueChanges();
  }
}
