import {University} from "../models/base/university";
import {Faculty} from "../models/base/faculty";
import {Programme} from "../models/base/programme";
import {Discipline} from "../models/base/discipline";
import {Review} from "../models/base/review";
import {User} from "../models/base/user";
import {ReviewRequest} from "../models/base/review-request";
import {UserRequest} from "../models/base/user-request";

export type BaseType = University | Faculty | Programme | Discipline | Review | User | ReviewRequest | UserRequest;
