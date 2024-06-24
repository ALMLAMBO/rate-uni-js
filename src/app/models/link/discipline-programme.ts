export class DisciplineProgramme {
  programmeId: string;
  disciplineId: string;
  reviewId: string;

  constructor(programmeId: string, disciplineId: string, reviewId: string) {
    this.programmeId = programmeId;
    this.disciplineId = disciplineId;
    this.reviewId = reviewId;
  }
}
