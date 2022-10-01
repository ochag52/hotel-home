import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from '@angular/core';
import {ImageItem} from "../../../app.interfaces";
import {GalleryModalComponent} from "../components/gallery-modal.component";

@Injectable()
export class GalleryModalService {

  private componentRef!: ComponentRef<GalleryModalComponent>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }

  public show(imgs: ImageItem[]) {
    const factory = this.cfr.resolveComponentFactory(GalleryModalComponent);

    const componentRef = factory.create(this.injector);
    const component = componentRef.instance;
    component.images = imgs;

    component.closeEvent
      .subscribe(() => this.hide());

    this.componentRef = componentRef;

    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(componentRef.location.nativeElement);
  }

  public hide(): void {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}
