export class Review {
  id: string;
  comment: string;
  publishedAt: Date;
  courseRating: number;
  lecturerRating: number;
  assistantsRating: number;
  difficulty: number;
  usefulness: number;
  disciplineId: string;
  userId: string;
  workLoad: number;
  hasExam: boolean;
  hasProject: boolean;
  hasMidChecks: boolean;
  hasHomeworks: boolean;
  hasOnlineClasses: boolean;
  hasBooks: boolean;
  hasPresentations: boolean;
  hasAdditionalMaterials: boolean;
  visible: boolean;

  constructor(id: string, comment: string, publishedAt: Date, courseRating: number,
              lecturerRating: number, assistantsRating: number, difficulty: number,
              usefulness: number, workLoad: number, disciplineId: string, userId: string, hasExam: boolean,
              hasProject: boolean, hasMidChecks: boolean, hasHomeworks: boolean,
              hasOnlineClasses: boolean, hasBooks: boolean, hasPresentations: boolean,
              hasAdditionalMaterials: boolean, visible: boolean) {

    this.id = id;
    this.comment = comment;
    this.publishedAt = publishedAt;
    this.courseRating = courseRating;
    this.lecturerRating = lecturerRating;
    this.assistantsRating = assistantsRating;
    this.difficulty = difficulty;
    this.usefulness = usefulness;
    this.workLoad = workLoad;
    this.disciplineId = disciplineId;
    this.userId = userId;
    this.hasExam = hasExam;
    this.hasProject = hasProject;
    this.hasMidChecks = hasMidChecks;
    this.hasHomeworks = hasHomeworks;
    this.hasOnlineClasses = hasOnlineClasses;
    this.hasBooks = hasBooks;
    this.hasPresentations = hasPresentations;
    this.hasAdditionalMaterials = hasAdditionalMaterials;
    this.visible = visible;
  }
}
