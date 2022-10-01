import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SectionItem } from '../../app.interfaces';
import { apiEndpoints } from '../../config/api.config';

const endpoint = apiEndpoints.sections;

@Injectable({
  providedIn: 'root'
})
export class SectionResource {

  constructor(
    private http: HttpClient) {
  }

  public getAll(): Observable<SectionItem[]> {
    return this.http.get<SectionItem[]>(`${ environment.api.url }${ endpoint }`);
  }

  public update(value: SectionItem): Observable<SectionItem> {
    return this.http.put<SectionItem>(`${ environment.api.url }${ endpoint }/${ value.id }`, value);
  }
}
