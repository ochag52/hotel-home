import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedbackItem, SectionItem } from '../../../app.interfaces';
import { FeedbackService } from '../../../models/feedback/feedback.service';
import { SectionService } from '../../../models/section/section.service';
import {map} from "rxjs/operators";

const SLIDER_INTERVAL = 8000;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: [ './feedback.component.scss' ]
})
export class FeedbackComponent implements OnInit, OnDestroy {

  public data!: FeedbackItem[];
  public section!: SectionItem;

  private interval!: number;

  constructor(
    private sectionService: SectionService,
    private feedbackService: FeedbackService) {

    this.section = sectionService.getById(5);

    feedbackService.getState()
      .pipe(
        map(list => list.sort((a, b) => a.order! - b.order!))
      )
      .subscribe(data => this.data = data);

    if (this.data && this.data.length) {
      this.sliderSetActiveByIndex(0);
      this.sliderRun();
    }
  }

  public ngOnInit(): void { }

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
    this.data.forEach(i => i.active = false);
    this.data[index].active = true;
  }

  private sliderSetActiveNext(): void {
    const count = this.data.length;
    const lastIndex = count - 1;

    if (count) {
      const active = this.data.find(i => i.active) as FeedbackItem;
      const activeIndex = this.data.indexOf(active);

      if (activeIndex !== lastIndex) {
        this.sliderSetActiveByIndex(activeIndex + 1);
      } else {
        this.sliderSetActiveByIndex(0);
      }
    }
  }

  public onMarker(item: FeedbackItem): void {
    const index = this.data.indexOf(item);
    this.sliderSetActiveByIndex(index);
    this.sliderRun();
  }
}
