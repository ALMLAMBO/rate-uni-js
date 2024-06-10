export class Faculty {
  id: string;
  name: string;
  dean: string;
  address: string;
  universityId: string;

  constructor(id: string, name: string, dean: string, address: string, universityId: string) {
    this.id = id;
    this.name = name;
    this.dean = dean;
    this.address = address;
    this.universityId = universityId;
  }
}
