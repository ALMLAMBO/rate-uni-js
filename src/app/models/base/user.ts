export class User {
  id: string;
  username: string;
  email: string;
  facultyNumber: string;
  password: string;

  constructor(id: string, username: string, email: string, facultyNumber: string, password: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.facultyNumber = facultyNumber;
    this.password = password;
  }
}
