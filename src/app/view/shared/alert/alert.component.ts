import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService, AlertType } from './alert.service';


@Component({
  selector: 'app-alert',
  template: `
    <div *ngFor="let alert of alerts" [ngClass]="getAlertClass(alert.type)">
      {{ alert.message }}
    </div>
  `,
  styles: [ `
    .alert {
      position: fixed;
      top: 32px;
      right: 16px;
      padding: 10px 20px;
      border-radius: 3px;
      margin-top: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      animation: fadeInOut 0.5s ease-in-out forwards;
      max-width: 288px;
      color: #fff;
      z-index: 1000;
    }

    .alert-default {
      background-color: #f0ad4e;
    }

    .alert-success {
      background-color: #5cb85c;
    }

    .alert-error {
      background-color: #d9534f;
    }

    @keyframes fadeInOut {
      0% {
        opacity: 0;
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  ` ]
})
export class AlertComponent implements OnInit, OnDestroy {
  alerts: { message: string, duration: number, type: AlertType }[] = [];
  private subscription!: Subscription;


  constructor(
    private alertService: AlertService) {
  }


  ngOnInit() {
    this.subscription = this.alertService.getAlert().subscribe(alert => {
      this.alerts.push(alert);
      setTimeout(() => this.removeAlert(alert), alert.duration);
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getAlertClass(type: AlertType) {
    return {
      'alert': true,
      'alert-default': type === 'default',
      'alert-success': type === 'success',
      'alert-error': type === 'error'
    };
  }


  private removeAlert(alert: { message: string, duration: number, type: AlertType }) {
    const index = this.alerts.indexOf(alert);
    if (index >= 0) {
      this.alerts.splice(index, 1);
    }
  }
}
