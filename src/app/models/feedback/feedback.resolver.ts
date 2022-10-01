import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FeedbackItem } from '../../app.interfaces';
import { FeedbackResource } from './feedback.resource';
import { FeedbackService } from './feedback.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackResolver implements Resolve<FeedbackItem[]> {

  constructor(
    private service: FeedbackService,
    private resource: FeedbackResource) {
  }

  resolve(): Observable<FeedbackItem[]> {
    return this.resource.getAll().pipe(
      tap(data => this.service.setState(data))
    );
  }
}
