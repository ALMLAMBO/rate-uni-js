import {BaseRepository} from "./base/base-repository";
import {University} from "../models/base/university";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UniversityRepository extends BaseRepository<University> {
  constructor() {
    super(environment.universityCollectionName);
  }
}
