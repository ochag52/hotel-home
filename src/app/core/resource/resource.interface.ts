import { Observable } from 'rxjs';

export interface CrudResource<T> {
  getAll(): Observable<T[]>;

  getOne(id: number): Observable<T>;

  create(value: T): Observable<T>;

  update(value: T): Observable<T>;

  delete(id: number): Observable<any>;
}
