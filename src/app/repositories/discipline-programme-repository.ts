import {Injectable} from "@angular/core";
import {BaseRepository} from "./base/base-repository";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {environment} from "../../environments/environment.development";
import {DisciplineProgramme} from "../models/link/discipline-programme";

@Injectable({
  providedIn: 'root'
})
export class DisciplineProgrammeRepository extends BaseRepository<DisciplineProgramme> {
  constructor(private af: AngularFirestore) {
    super(af, environment.disciplineProgrammeCollectionName);
  }
}
