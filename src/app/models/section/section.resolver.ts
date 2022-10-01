import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SectionItem } from '../../app.interfaces';
import { SectionResource } from './section.resource';
import { SectionService } from './section.service';

@Injectable({
  providedIn: 'root'
})
export class SectionResolver implements Resolve<SectionItem[]> {

  constructor(
    private service: SectionService,
    private resource: SectionResource) {
  }

  resolve(): Observable<SectionItem[]> {
    return this.resource.getAll().pipe(
      tap(data => this.service.setState(data)),
    );
  }
}
