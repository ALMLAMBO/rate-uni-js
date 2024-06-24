import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseRepository<T> {
  protected collectionName: string = '';
  protected firestoreCollection: AngularFirestoreCollection<T>;

  protected constructor(protected angularFirestore: AngularFirestore, collectionName: string) {
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

  createObject(id: string, object: T) {
    this.firestoreCollection.doc(id).set(object)
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
