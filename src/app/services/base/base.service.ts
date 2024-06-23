import { Injectable } from '@angular/core';
import {BaseRepository} from "../../repositories/base/base-repository";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {
  protected constructor(protected baseRepository:BaseRepository<T>) { }

  getAllObjects() : Observable<T[]> {
    return this.baseRepository.getAllObjects();
  }

  getObjectById(id: string) : Observable<T> {
    return this.baseRepository.getObject(id);
  }

  createObject(id: string, object: T) {
    this.baseRepository.createObject(id, object);
  }

  updateObject(id: string, object: T) {
    this.baseRepository.updateObject(id, object);
  }

  deleteObject(id: string) {
    this.baseRepository.deleteObject(id);
  }
}
