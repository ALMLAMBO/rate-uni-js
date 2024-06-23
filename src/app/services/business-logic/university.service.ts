import {Inject, Injectable} from '@angular/core';
import {University} from "../../models/base/university";
import {BaseService} from "../base/base.service";
import {UniversityRepository} from "../../repositories/university-repository";
import {FacultyService} from "./faculty.service";
import {Faculty} from "../../models/base/faculty";

@Injectable({
  providedIn: 'root'
})
export class UniversityService extends BaseService<University> {
  private facultyService: FacultyService = Inject(FacultyService);

  constructor() {
    super(new UniversityRepository());
  }

  deleteUniversity(universityId: string) {
    this.deleteObject(universityId);
    this.facultyService
      .getFacultyByUniversityId(universityId)
      .subscribe((faculties: Faculty[]) => {
        faculties.forEach((faculty: Faculty) => {
          this.facultyService.deleteFaculty(faculty.id);
        });
      });
  }
}
