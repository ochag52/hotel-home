import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContactItem } from '../../app.interfaces';
import { ContactResource } from './contact.resource';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<ContactItem[]> {

  constructor(
    private service: ContactService,
    private resource: ContactResource) {
  }

  resolve(): Observable<ContactItem[]> {
    return this.resource.getAll().pipe(
      tap(data => this.service.setState(data))
    );
  }
}
