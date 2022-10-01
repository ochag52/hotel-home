import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PreviewItem } from '../../app.interfaces';
import { PreviewResource } from './preview.resource';
import { PreviewService } from './preview.service';

@Injectable({
  providedIn: 'root'
})
export class PreviewResolver implements Resolve<PreviewItem[]> {

  constructor(
    private service: PreviewService,
    private resource: PreviewResource) {
  }

  resolve(): Observable<PreviewItem[]> {
    return this.resource.getAll().pipe(
      tap(data => this.service.setState(data))
    );
  }
}
