export class Programme {
  id: string;
  title: string;
  description: string;
  facultyId: string;

  constructor(id: string, title: string, description: string, facultyId: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.facultyId = facultyId;
  }
}
