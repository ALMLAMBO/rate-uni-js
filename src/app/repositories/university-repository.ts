import {BaseRepository} from "./base/base-repository";
import {University} from "../models/base/university";
import {environment} from "../../environments/environment.development";

export class UniversityRepository extends BaseRepository<University> {
  constructor() {
    super(environment.universityCollectionName);
  }
}
