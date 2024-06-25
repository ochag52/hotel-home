import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MainRoutingModule } from '../../routes/main.routing';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './components/error/error.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { HeaderComponent } from './header/header.component';
import { LeisureComponent } from './leisure/leisure.component';
import { MainComponent } from './main.component';
import { BookModalComponent } from './modals/book-modal/book-modal.component';
import { PreviewComponent } from './preview/preview.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServicesComponent } from './services/services.component';


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
    BookModalComponent,
    ErrorComponent,
    AutofocusDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    GalleryModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule {
}
