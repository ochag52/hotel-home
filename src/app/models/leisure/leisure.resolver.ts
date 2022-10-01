import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LeisureItem } from '../../app.interfaces';
import { LeisureResource } from './leisure.resource';
import { LeisureService } from './leisure.service';

@Injectable({
  providedIn: 'root'
})
export class LeisureResolver implements Resolve<LeisureItem[]> {

  constructor(
    private service: LeisureService,
    private resource: LeisureResource) {
  }

  resolve(): Observable<LeisureItem[]> {
    return this.resource.getAll().pipe(
      tap(data => this.service.setState(data))
    );
  }
}
