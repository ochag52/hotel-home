import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackItem } from '../../app.interfaces';
import { apiEndpoints } from '../../config/api.config';
import { SimpleCrudResource } from '../../core/resource/resource.impl';

@Injectable({
  providedIn: 'root'
})
export class FeedbackResource extends SimpleCrudResource<FeedbackItem> {

  constructor(
    protected http: HttpClient) {
    super(http);

    this.endpoint = apiEndpoints.feedbacks;
  }
}
