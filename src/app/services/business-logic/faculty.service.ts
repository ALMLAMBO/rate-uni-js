import {Inject, Injectable} from '@angular/core';
import {BaseService} from "../base/base.service";
import {Faculty} from "../../models/base/faculty";
import {FacultyRepository} from "../../repositories/faculty-repository";
import {ProgrammeService} from "./programme.service";
import {Programme} from "../../models/base/programme";

@Injectable({
  providedIn: 'root'
})
export class FacultyService extends BaseService<Faculty> {
  private programmeService: ProgrammeService = Inject(ProgrammeService);

  constructor(private facultyRepository: FacultyRepository) {
    super(facultyRepository);
  }

  getFacultyByUniversityId(universityId: string) {
    return this.facultyRepository.getFacultiesForUniversity(universityId);
  }

  deleteFaculty(facultyId: string) {
    this.deleteObject(facultyId);
    this.programmeService
      .getProgrammesForFaculty(facultyId)
      .subscribe((programmes: Programme[]) => {
        programmes.forEach((programme: Programme) => {
          this.programmeService.deleteProgramme(programme.id);
        });
      });
  }
}
