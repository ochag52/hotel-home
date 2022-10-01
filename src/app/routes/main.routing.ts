import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContactResolver} from '../models/contact/contact.resolver';
import {FeedbackResolver} from '../models/feedback/feedback.resolver';
import {LeisureResolver} from '../models/leisure/leisure.resolver';
import {PreviewResolver} from '../models/preview/preview.resolver';
import {RoomResolver} from '../models/room/room.resolver';
import {SectionResolver} from '../models/section/section.resolver';
import {ServResolver} from '../models/serv/serv.resolver';
import {MainComponent} from '../view/main/main.component';
import {ImageResolver} from "../models/image/image.resolver";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        resolve: {
          sections: SectionResolver,
          contacts: ContactResolver,
          feedbacks: FeedbackResolver,
          leisures: LeisureResolver,
          previews: PreviewResolver,
          rooms: RoomResolver,
          servs: ServResolver,
          images: ImageResolver
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
