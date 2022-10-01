import {Injectable} from '@angular/core';
import {ContactItem} from '../../app.interfaces';
import {SimpleState} from '../../core/store/store.impl';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends SimpleState<ContactItem> {

  constructor() {
    super();
  }
}
