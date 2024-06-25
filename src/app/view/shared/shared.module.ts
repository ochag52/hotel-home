import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryModalService} from "./services/gallery.service";
import { GalleryModalComponent } from './components/gallery-modal.component';
import {GalleryModule} from "ng-gallery";
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    GalleryModalComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    GalleryModule
  ],
  exports: [
    CommonModule,
    AlertComponent
  ],
  providers: [
    GalleryModalService
  ]
})
export class SharedModule {
}
