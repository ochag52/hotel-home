import {Injectable} from '@angular/core';
import {RoomItem} from '../../app.interfaces';
import {SimpleState} from '../../core/store/store.impl';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends SimpleState<RoomItem> {

  constructor() {
    super();
  }
}
