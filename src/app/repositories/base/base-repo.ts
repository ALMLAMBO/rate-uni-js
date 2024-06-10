import { Inject } from "@angular/core";
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

export abstract class BaseRepo<T> {
  private angularFirestore: AngularFirestore = Inject(AngularFirestore);
  protected collectionName: string = '';
  private firestoreCollection: AngularFirestoreCollection<T>;

  protected constructor(collectionName: string) {
    this.collectionName = collectionName;
    this.firestoreCollection = this.angularFirestore.collection<T>(collectionName);
  }

  getAllObjects() : Observable<T[]> {
    return <Observable<T[]>>this.angularFirestore.collection<T>(this.collectionName).valueChanges();
  }

  getObject(id: string): Observable<T> {
    return <Observable<T>>this.firestoreCollection
      .doc(id)
      .valueChanges();
  }

  createObject(object: T) {
    this.angularFirestore.collection<T>(this.collectionName).add(object)
      .then(() => console.log("New object added successfully."));
  }

  updateObject(id: string, object: T) {
    this.firestoreCollection
      .doc(id)
      .update(object)
      .then(() => console.log("Object updated successfully."));
  }

  deleteObject(id: string) {
    this.firestoreCollection
      .doc(id)
      .delete()
      .then(() => console.log("Object deleted successfully."));
  }
}
