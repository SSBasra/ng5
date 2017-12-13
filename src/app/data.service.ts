import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// best way to share data between is RXJS BehaviourSubject

@Injectable() // Means it a service
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal','Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() {}

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
