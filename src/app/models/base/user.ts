import {Role} from "../../vo/role";

export class User {
  id: string;
  username: string;
  email: string;
  facultyNumber: string;
  password: string;
  role: string;

  constructor(id: string, username: string, email: string, facultyNumber: string, password: string, role: Role) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.facultyNumber = facultyNumber;
    this.password = password;
    this.role = role.toString();
  }
}
