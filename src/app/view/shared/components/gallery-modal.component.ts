import {Component, OnInit} from '@angular/core';
import {ImageItem} from "../../../app.interfaces";
import {Subject} from "rxjs";
import {GalleryItem, ImageItem as GalleryImageItem} from "ng-gallery";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit {

  public images!: ImageItem[];
  public closeEvent = new Subject();
  public items!: GalleryItem[];

  constructor() { }

  public ngOnInit(): void {
    this.items = [...this.images.map(i => {
      return new GalleryImageItem({
        src: environment.storage + i.url,
        thumb: environment.storage + i.url
      })
    })
    ]
  }

}
