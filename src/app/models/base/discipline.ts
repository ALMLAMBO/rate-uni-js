import { DisciplineCategory } from "../../vo/discipline-category";
import { DisciplineType } from "../../vo/discipline-type";

export class Discipline {
  id: string;
  name: string;
  description: string;
  credits: number;
  lecturer: string;
  assistants: string;
  disciplineCategory: DisciplineCategory;
  disciplineType: DisciplineType;

  constructor(id: string, name: string, description: string, credits: number, lecturer: string, assistants: string, disciplineCategory: DisciplineCategory, disciplineType: DisciplineType) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.credits = credits;
    this.lecturer = lecturer;
    this.assistants = assistants;
    this.disciplineCategory = disciplineCategory;
    this.disciplineType = disciplineType;
  }
}
