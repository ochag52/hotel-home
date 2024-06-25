import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<Alert>();


  getAlert(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }


  alert(message: string, options: { duration?: number, type?: AlertType } = {}) {
    const { duration = 3000, type = 'default' } = options;
    this.alertSubject.next({ message, duration, type });
  }
}


export type AlertType = 'default' | 'success' | 'error';


interface Alert {
  message: string;
  duration: number;
  type: AlertType;
}
