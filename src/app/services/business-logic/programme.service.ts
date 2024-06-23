import {Inject, Injectable} from '@angular/core';
import {Programme} from "../../models/base/programme";
import {BaseService} from "../base/base.service";
import {ProgrammeRepository} from "../../repositories/programme-repository";
import {DisciplineService} from "./discipline.service";

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService extends BaseService<Programme> {
  private disciplineService: DisciplineService = Inject(DisciplineService);

  constructor() {
    super(new ProgrammeRepository());
  }

  getProgrammesForFaculty(facultyId: string) {
    return (<ProgrammeRepository>this.baseRepository).getAllProgrammesForFaculty(facultyId);
  }

  deleteProgramme(programmeId: string) {
    this.deleteObject(programmeId);
    this.disciplineService
      .getDisciplinesForProgramme(programmeId)
      .subscribe(disciplines => {
        disciplines.forEach(discipline => {
          this.disciplineService.deleteDiscipline(discipline.id);
        });
      });
  }
}
