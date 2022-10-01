import {Injectable} from '@angular/core';
import {ImageItem} from '../../app.interfaces';
import {SimpleState} from '../../core/store/store.impl';

@Injectable({
  providedIn: 'root'
})
export class ImageService extends SimpleState<ImageItem> {

  constructor() {
    super();
  }
}
