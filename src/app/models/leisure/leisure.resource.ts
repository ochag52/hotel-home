import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeisureItem } from '../../app.interfaces';
import { apiEndpoints } from '../../config/api.config';
import { SimpleCrudResource } from '../../core/resource/resource.impl';

@Injectable({
  providedIn: 'root'
})
export class LeisureResource extends SimpleCrudResource<LeisureItem> {

  constructor(
    protected http: HttpClient) {
    super(http);

    this.endpoint = apiEndpoints.leisures;
  }
}
