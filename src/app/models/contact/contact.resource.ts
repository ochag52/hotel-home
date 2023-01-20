import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactItem } from '../../app.interfaces';
import { apiEndpoints } from '../../config/api.config';
import { SimpleCrudResource } from '../../core/resource/resource.impl';

@Injectable({
  providedIn: 'root'
})
export class ContactResource extends SimpleCrudResource<ContactItem> {

  constructor(
    protected override http: HttpClient) {
    super(http);

    this.endpoint = apiEndpoints.contacts;
  }
}
