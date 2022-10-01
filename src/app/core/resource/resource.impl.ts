import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StoreEntity } from '../store/store.interface';
import { CrudResource } from './resource.interface';

export class SimpleCrudResource<T extends StoreEntity> implements CrudResource<T> {

  protected endpoint!: string;

  constructor(
    protected http: HttpClient) {
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${ environment.api.url }${ this.endpoint }`);
  }

  public getOne(id: number): Observable<T> {
    return this.http.get<T>(`${ environment.api.url }${ this.endpoint }/${ id }`);
  }

  public create(value: T): Observable<T> {
    return this.http.post<T>(`${ environment.api.url }${ this.endpoint }`, value);
  }

  public update(value: T): Observable<T> {
    return this.http.put<T>(`${ environment.api.url }${ this.endpoint }/${ value.id }`, value);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${ environment.api.url }${ this.endpoint }/${ id }`);
  }

}
