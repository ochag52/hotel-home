import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ServItem } from '../../app.interfaces';
import { ServResource } from './serv.resource';
import { ServService } from './serv.service';

@Injectable({
  providedIn: 'root'
})
export class ServResolver implements Resolve<ServItem[]> {

  constructor(
    private service: ServService,
    private resource: ServResource) {
  }

  resolve(): Observable<ServItem[]> {
    return this.resource.getAll().pipe(
      tap(data => this.service.setState(data))
    );
  }
}
