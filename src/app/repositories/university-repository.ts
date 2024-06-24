import {BaseRepository} from "./base/base-repository";
import {University} from "../models/base/university";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UniversityRepository extends BaseRepository<University> {
  constructor(private af: AngularFirestore) {
    super(af,  environment.universityCollectionName);
  }
}
