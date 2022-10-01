import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RoomItem } from '../../app.interfaces';
import { RoomResource } from './room.resource';
import { RoomService } from './room.service';

@Injectable({
  providedIn: 'root'
})
export class RoomResolver implements Resolve<RoomItem[]> {

  constructor(
    private service: RoomService,
    private resource: RoomResource) {
  }

  resolve(): Observable<RoomItem[]> {
    return this.resource.getAll().pipe(
      tap(data => this.service.setState(data))
    );
  }
}
