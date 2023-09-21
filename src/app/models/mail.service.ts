import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { apiEndpoints } from '../config/api.config';


@Injectable({
  providedIn: 'root'
})
export class MailService {


  constructor(
    private readonly http: HttpClient) {
  }


  public send(message: string) {
    return this.http.post<void>(`${ environment.api.url }${ apiEndpoints.mail }/send`, { message });
  }
}
