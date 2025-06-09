import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from './project-data.service';

@Injectable({ providedIn: 'root' })
export class FirebaseProjectDataService {
  constructor(private firestore: Firestore) {}

  getProjects(): Observable<Project[]> {
    const projectsRef = collection(this.firestore, 'projects');
    return collectionData(projectsRef, { idField: 'id' }) as Observable<Project[]>;
  }
}
