export class University {
  id: string;
  name: string;
  rector: string;
  hqAddress: string;

  constructor(id: string, name: string, rector: string, hqAddress: string) {
    this.id = id;
    this.name = name;
    this.rector = rector;
    this.hqAddress = hqAddress;
  }
}
