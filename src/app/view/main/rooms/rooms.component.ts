import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {RoomItem, SectionItem} from '../../../app.interfaces';
import {RoomService} from '../../../models/room/room.service';
import {SectionService} from '../../../models/section/section.service';
import {GalleryModalService} from "../../shared/services/gallery.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  public data!: RoomItem[];
  public section!: SectionItem;
  public storageUrl!: string;

  constructor(
    private sectionService: SectionService,
    private roomService: RoomService,
    private gallery: GalleryModalService) {

    this.storageUrl = environment.storage;
    this.section = sectionService.getById(3);

    roomService.getState()
      .pipe(
        map(list => list.sort((a, b) => a.order! - b.order!))
      )
      .subscribe(data => this.data = data);
  }

  public ngOnInit(): void {
  }

  public onGallery(item: RoomItem): void {
    if (item.imgs && item.imgs.length) {
      this.gallery.show(item.imgs);
    }
  }
}
