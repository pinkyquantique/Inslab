import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   stepSubject = new BehaviorSubject<number>(0);  // Default starting step
  changeEmitted$ = this.stepSubject.asObservable();  // Observable to listen to changes

  emitChange(stepIndex: number) {
    this.stepSubject.next(stepIndex);  // Emit a new step index
  }
}
