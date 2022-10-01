import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ImageItem } from '../../app.interfaces';
import { ImageResource } from './image.resource';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class ImageResolver implements Resolve<ImageItem[]> {

  constructor(
    private service: ImageService,
    private resource: ImageResource) {
  }

  resolve(): Observable<ImageItem[]> {
    return this.resource.getAllByCat('gallery').pipe(
      tap(data => this.service.setState(data))
    );
  }
}
