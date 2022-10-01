import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MainRoutingModule} from '../../routes/main.routing';
import {ContactsComponent} from './contacts/contacts.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderInfoComponent} from './header-info/header-info.component';
import {HeaderComponent} from './header/header.component';
import {LeisureComponent} from './leisure/leisure.component';
import {PreviewComponent} from './preview/preview.component';
import {RoomsComponent} from './rooms/rooms.component';
import {ServicesComponent} from './services/services.component';
import {MainComponent} from './main.component';
import {SharedModule} from "../shared/shared.module";
import { GalleryComponent } from './gallery/gallery.component';
import {GalleryModule} from "ng-gallery";

@NgModule({
  declarations: [
    MainComponent,
    HeaderInfoComponent,
    HeaderComponent,
    PreviewComponent,
    ServicesComponent,
    RoomsComponent,
    LeisureComponent,
    FeedbackComponent,
    FooterComponent,
    ContactsComponent,
    GalleryComponent,
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule,
        GalleryModule
    ],
  exports: [
    CommonModule
  ]
})
export class MainModule {
}
