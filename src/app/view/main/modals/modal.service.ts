import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private componentRef!: ComponentRef<any> | null;


  constructor(
    private readonly injector: Injector,
    private readonly applicationRef: ApplicationRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver) {
  }


  public open(component: Type<any>): void {
    if (!this.componentRef) {
      const cfr = this.componentFactoryResolver.resolveComponentFactory(component);
      this.componentRef = cfr.create(this.injector);
      this.applicationRef.attachView(this.componentRef.hostView);

      document.body.appendChild(this.componentRef.location.nativeElement);
    }
  }


  public close(): void {
    if (this.componentRef) {
      this.applicationRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
