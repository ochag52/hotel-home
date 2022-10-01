import {Injectable} from '@angular/core';
import {PreviewItem} from '../../app.interfaces';
import {SimpleState} from '../../core/store/store.impl';

@Injectable({
  providedIn: 'root'
})
export class PreviewService extends SimpleState<PreviewItem> {

  constructor() {
    super();
  }
}
