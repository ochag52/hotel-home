import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryModalService} from "./services/gallery.service";
import { GalleryModalComponent } from './components/gallery-modal.component';
import {GalleryModule} from "ng-gallery";


@NgModule({
  declarations: [
    GalleryModalComponent
  ],
  imports: [
    CommonModule,
    GalleryModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    GalleryModalService
  ]
})
export class SharedModule {
}
