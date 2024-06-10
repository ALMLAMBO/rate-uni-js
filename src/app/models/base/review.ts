import {UUID} from "node:crypto";
import {comment} from "postcss";

export class Review {
  id: string;
  comment: string;
  publishedAt: Date;
  courseRating: number;
  lecturerRating: number;
  assistantsRating: number;
  difficulty: number;
  usefulness: number;
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

  constructor(id: string, comment: string, publishedAt: Date, courseRating: number, lecturerRating: number, assistantsRating: number, difficulty: number, usefulness: number, workLoad: number, hasExam: boolean, hasProject: boolean, hasMidChecks: boolean, hasHomeworks: boolean, hasOnlineClasses: boolean, hasBooks: boolean, hasPresentations: boolean, hasAdditionalMaterials: boolean, visible: boolean) {
    this.id = id;
    this.comment = comment;
    this.publishedAt = publishedAt;
    this.courseRating = courseRating;
    this.lecturerRating = lecturerRating;
    this.assistantsRating = assistantsRating;
    this.difficulty = difficulty;
    this.usefulness = usefulness;
    this.workLoad = workLoad;
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
