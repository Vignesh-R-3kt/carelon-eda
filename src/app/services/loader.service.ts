import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader = new BehaviorSubject<boolean>(false);

  constructor() { };

  openLoader() {
    this.loader.next(true);
  };

  closeLoader() {
    this.loader.next(false);
  }
}
