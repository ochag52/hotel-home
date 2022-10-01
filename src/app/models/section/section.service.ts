import {Injectable} from '@angular/core';
import {SectionItem} from '../../app.interfaces';
import {SimpleState} from '../../core/store/store.impl';

@Injectable({
  providedIn: 'root'
})
export class SectionService extends SimpleState<SectionItem> {

  constructor() {
    super();
  }
}
