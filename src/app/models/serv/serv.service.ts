import {Injectable} from '@angular/core';
import {ServItem} from '../../app.interfaces';
import {SimpleState} from '../../core/store/store.impl';

@Injectable({
  providedIn: 'root'
})
export class ServService extends SimpleState<ServItem> {

  constructor() {
    super();
  }
}
