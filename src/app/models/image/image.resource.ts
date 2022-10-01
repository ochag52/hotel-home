import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ImageItem } from '../../app.interfaces';
import { apiEndpoints } from '../../config/api.config';
import { SimpleCrudResource } from '../../core/resource/resource.impl';

@Injectable({
  providedIn: 'root'
})
export class ImageResource extends SimpleCrudResource<ImageItem> {

  constructor(
    protected http: HttpClient) {
    super(http);

    this.endpoint = apiEndpoints.images;
  }

  public getAllByCat(cat: string): Observable<ImageItem[]> {
    return this.http.get<ImageItem[]>(`${ environment.api.url }${ this.endpoint }`, {
      params: { cat }
    });
  }
}
