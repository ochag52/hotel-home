import { Observable } from 'rxjs';

export interface StoreEntity {
  id?: number;
}

export interface State<T> {
  getState(): Observable<Array<T>>;

  setState(state: Array<T>): void;

  getById(id: number): T;

  add(item: T): void;

  update(item: T): void;

  remove(item: T): void;

  isEmpty(): boolean;

  isState(): boolean;
}
