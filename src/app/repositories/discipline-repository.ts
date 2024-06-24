import {BaseRepository} from "./base/base-repository";
import {Discipline} from "../models/base/discipline";
import {environment} from "../../environments/environment.development";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {UserDiscipline} from "../models/link/user-discipline";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {DisciplineProgramme} from "../models/link/discipline-programme";
import {Programme} from "../models/base/programme";
import {ProgrammeRepository} from "./programme-repository";

@Injectable({
  providedIn: 'root'
})
export class DisciplineRepository extends BaseRepository<Discipline> {
  constructor(private af: AngularFirestore,
              private programmeRepository: ProgrammeRepository) {
    
    super(af, environment.disciplineCollectionName);
  }

  getDisciplinePorgramme(reviewId: string, disciplineId: string): Observable<Programme> {
    let discipline: Discipline;
    this.getObject(disciplineId)
      .subscribe(d => discipline = d);
    
    let programmeId: string = '';
    this.af.collection<DisciplineProgramme>(
      environment.disciplineProgrammeCollectionName,
      ref => ref.where("disciplineId", "==", disciplineId)
        .where("reviewId", "==", reviewId))
      .valueChanges()
      .subscribe(disciplineProgrammes => {
        programmeId = disciplineProgrammes[0].programmeId;
      });
    
    return this.programmeRepository.getObject(programmeId);
  }
  
  getAllDisciplinesForProgramme(programmeId: string): Observable<Discipline[]> {
    return this.angularFirestore
      .collection<Discipline>(this.collectionName, ref => ref.where("programmeId", "==", programmeId))
      .valueChanges();
  }

  getAllDisciplinesForUser(userId: string): Observable<Discipline[]> {
    let disciplines: Discipline[] = [];

    this.angularFirestore
      .collection<UserDiscipline>(environment.userDisciplineCollectionName, ref => ref.where("userId", "==", userId))
      .valueChanges()
      .subscribe(userDisciplines => {
        userDisciplines.forEach(userDiscipline => {
          this.getObject(userDiscipline.disciplineId)
            .subscribe(discipline => disciplines.push(discipline));
        });
      })

    return of(disciplines);
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
