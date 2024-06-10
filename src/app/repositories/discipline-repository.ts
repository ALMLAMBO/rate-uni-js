import {BaseRepository} from "./base/base-repository";
import {Discipline} from "../models/base/discipline";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

export class DisciplineRepository extends BaseRepository<Discipline> {
  constructor() {
    super(environment.disciplineCollectionName);
  }

  getAllDisciplinesForProgramme(programmeId: string): Observable<Discipline[]> {
    return this.angularFirestore
      .collection<Discipline>(this.collectionName, ref => ref.where("programmeId", "==", programmeId))
      .valueChanges();
  }
}
