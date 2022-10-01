import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {PreviewItem, Slide} from '../../../app.interfaces';
import { PreviewService } from '../../../models/preview/preview.service';
import {map} from "rxjs/operators";

const SLIDER_INTERVAL = 7000;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: [ './preview.component.scss' ]
})
export class PreviewComponent implements OnInit, OnDestroy {

  public height!: string;
  public previews!: PreviewItem[];
  public storageUrl!: string;

  private interval!: number;

  constructor(
    private previewService: PreviewService) {

    this.storageUrl = environment.storage;

    previewService.getState()
      .pipe(
        map(list => list.sort((a, b) => a.order! - b.order!))
      )
      .subscribe(data => this.previews = data);

    if (this.previews && this.previews.length) {
      this.sliderSetActiveByIndex(0);
      this.sliderRun();
    }
  }

  public ngOnInit(): void {
    this.height = `${ window.innerHeight - 136 }px`;
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private sliderRun(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }

    // @ts-ignore
    this.interval = setInterval(
      () => this.sliderSetActiveNext(),
      SLIDER_INTERVAL
    );
  }

  private sliderSetActiveByIndex(index: number): void {
    this.previews.forEach(i => i.active = false);
    this.previews[index].active = true;
  }

  private sliderSetActiveNext(): void {
    const count = this.previews.length;
    const lastIndex = count - 1;

    if (count) {
      const active = this.previews.find(i => i.active) as Slide;
      const activeIndex = this.previews.indexOf(active);

      if (activeIndex !== lastIndex) {
        this.sliderSetActiveByIndex(activeIndex + 1);
      } else {
        this.sliderSetActiveByIndex(0);
      }
    }
  }

  public onMarker(item: PreviewItem): void {
    const index = this.previews.indexOf(item);
    this.sliderSetActiveByIndex(index);
    this.sliderRun();
  }
}
