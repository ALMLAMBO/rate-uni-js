import { RequestStatus } from "../../vo/request-status";

export class UserRequest {
  id: string;
  userId: string;
  username: string;
  universityName: string;
  facultyName: string;
  programmeName: string;
  facultyNumber: string;

  requestStatus: RequestStatus;
  image: string;
  createdAt: Date;

  constructor(id: string, userId: string, username: string, universityName: string, facultyName: string, programmeName: string, facultyNumber: string, requestStatus: RequestStatus, image: string, createdAt: Date) {
    this.id = id;
    this.userId = userId;
    this.username = username;
    this.universityName = universityName;
    this.facultyName = facultyName;
    this.programmeName = programmeName;
    this.facultyNumber = facultyNumber;
    this.requestStatus = requestStatus;
    this.image = image;
    this.createdAt = createdAt;
  }
}
