import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {LeisureItem, SectionItem} from '../../../app.interfaces';
import {LeisureService} from '../../../models/leisure/leisure.service';
import {SectionService} from '../../../models/section/section.service';
import {GalleryModalService} from "../../shared/services/gallery.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent implements OnInit {

  public section!: SectionItem;
  public data!: LeisureItem[];
  public storageUrl!: string;

  constructor(
    private sectionService: SectionService,
    private leisureService: LeisureService,
    private gallery: GalleryModalService) {

    this.storageUrl = environment.storage;
    this.section = sectionService.getById(4);

    leisureService.getState()
      .pipe(
        map(list => list.sort((a, b) => a.order! - b.order!))
      )
      .subscribe(data => this.data = data);
  }

  public ngOnInit(): void {
  }

  public onGallery(item: LeisureItem): void {
    if (item.imgs && item.imgs.length) {
      this.gallery.show(item.imgs);
    }
  }
}
