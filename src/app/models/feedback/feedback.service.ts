import {Injectable} from '@angular/core';
import {FeedbackItem} from '../../app.interfaces';
import {SimpleState} from '../../core/store/store.impl';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends SimpleState<FeedbackItem> {

  constructor() {
    super();
  }
}
