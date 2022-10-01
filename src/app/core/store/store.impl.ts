import { BehaviorSubject, Observable } from 'rxjs';
import { State, StoreEntity } from './store.interface';

export class SimpleState<T extends StoreEntity> implements State<T> {

  // @ts-ignore
  protected state$ = new BehaviorSubject<Array<T>>(null);

  public getState(): Observable<Array<T>> {
    return this.state$.asObservable();
  }

  public setState(value: Array<T>): void {
    this.state$.next(value);
  }

  public getById(id: number): T {
    return this.state$.getValue().find(
      item => item.id === id
    )!;
  }

  public add(value: T): void {
    const state = this.state$.getValue();
    this.state$.next([ ...state, value ]);
  }

  public remove(value: T): void {
    const state = this.state$.getValue()
      .filter(itm => itm.id !== value.id);
    this.state$.next([ ...state ]);
  }

  public update(value: T | Array<T>): void {
    const state = this.state$.getValue();

    if (Array.isArray(value)) {
      value.forEach((itm, index) => state[index] = itm);
    } else {
      const index = state.findIndex(i => i.id === value.id);
      state[index] = value;
    }
    this.state$.next([ ...state ]);
  }

  public isEmpty(): boolean {
    return this.state$.getValue().length === 0;
  }

  public isState(): boolean {
    return this.state$.getValue() !== null;
  }
}
