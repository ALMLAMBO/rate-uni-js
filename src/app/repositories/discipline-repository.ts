import {BaseRepository} from "./base/base-repository";
import {Discipline} from "../models/base/discipline";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {UserDiscipline} from "../models/link/user-discipline";

@Injectable({
  providedIn: 'root'
})
export class DisciplineRepository extends BaseRepository<Discipline> {
  constructor() {
    super(environment.disciplineCollectionName);
  }

  getAllDisciplinesForProgramme(programmeId: string): Observable<Discipline[]> {
    return this.angularFirestore
      .collection<Discipline>(this.collectionName, ref => ref.where("programmeId", "==", programmeId))
      .valueChanges();
  }

  addUserToDiscipline(disciplineId: string, userId: string) {
    this.angularFirestore
      .collection<UserDiscipline>(environment.userDisciplineCollectionName)
      .doc(`${userId}:${disciplineId}`)
      .set(new UserDiscipline(userId, disciplineId))
      .then(() => console.log("User added to discipline"));
  }

  removeUserFromDiscipline(disciplineId: string, userId: string) {
    this.angularFirestore
      .collection<UserDiscipline>(environment.userDisciplineCollectionName)
      .doc(`${userId}:${disciplineId}`)
      .delete()
      .then(() => console.log("User removed from discipline"));
  }
}
