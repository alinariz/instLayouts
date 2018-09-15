import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class ThemeSettingsProvider {

  private primaryColor: BehaviorSubject<String>;
  private secondaryColor: BehaviorSubject<String>;

  constructor() {
    this.primaryColor = new BehaviorSubject('primaryRed');
    this.secondaryColor = new BehaviorSubject('secondaryWhite');
  }

  setPrimaryActive(val) {
    this.primaryColor.next(val);
  }

  getPrimaryActive() {
    return this.primaryColor.asObservable();
  }

  setSecondaryActive(val) {
    this.secondaryColor.next(val);
  }

  getSecondaryActive() {
    return this.secondaryColor.asObservable();
  }

}
