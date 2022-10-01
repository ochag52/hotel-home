import {Component, OnInit} from '@angular/core';
import {SectionItem} from "../../../app.interfaces";
import {SectionService} from "../../../models/section/section.service";
import {ImageService} from "../../../models/image/image.service";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {GalleryItem, ImageItem} from "ng-gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public data!: GalleryItem[];
  public section!: SectionItem;
  public storageUrl!: string;

  constructor(
    private sectionService: SectionService,
    private imageService: ImageService) {

    this.storageUrl = environment.storage;
    this.section = sectionService.getById(7);

    imageService.getState()
      .pipe(
        map(images => {
          return [...images.map(i => {
            return new ImageItem({
              src: environment.storage + i.url,
              thumb: environment.storage + i.url
            })
          })
          ]
        })
      )
      .subscribe(data => this.data = data);
  }

  public ngOnInit(): void {
  }

}
