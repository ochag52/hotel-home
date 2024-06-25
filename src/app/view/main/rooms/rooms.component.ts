import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { RoomItem, SectionItem } from '../../../app.interfaces';
import { RoomService } from '../../../models/room/room.service';
import { SectionService } from '../../../models/section/section.service';
import { GalleryModalService } from '../../shared/services/gallery.service';
import { BookModalComponent } from '../modals/book-modal/book-modal.component';
import { ModalService } from '../modals/modal.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: [ './rooms.component.scss' ]
})
export class RoomsComponent {

  public data!: RoomItem[];
  public section!: SectionItem;
  public storageUrl!: string;


  constructor(
    private sectionService: SectionService,
    private roomService: RoomService,
    private gallery: GalleryModalService,
    private readonly modal: ModalService) {

    this.storageUrl = environment.storage;
    this.section = sectionService.getById(3);

    roomService.getState()
      .pipe(
        map(list => list.sort((a, b) => a.order! - b.order!))
      )
      .subscribe(data => this.data = data);
  }


  public onGallery(item: RoomItem): void {
    if (item.imgs && item.imgs.length) {
      this.gallery.show(item.imgs);
    }
  }


  public onOpenBook(): void {
    this.modal.open(BookModalComponent);
  }
}
