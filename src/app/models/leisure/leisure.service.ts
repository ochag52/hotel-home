import {Injectable} from '@angular/core';
import {LeisureItem} from '../../app.interfaces';
import {SimpleState} from '../../core/store/store.impl';

@Injectable({
  providedIn: 'root'
})
export class LeisureService extends SimpleState<LeisureItem> {

  constructor() {
    super();
  }
}
