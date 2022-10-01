import { Component, OnInit } from '@angular/core';
import { SectionItem, ServItem } from '../../../app.interfaces';
import { SectionService } from '../../../models/section/section.service';
import { ServService } from '../../../models/serv/serv.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: [ './services.component.scss' ]
})
export class ServicesComponent implements OnInit {

  public data!: ServItem[];
  public section!: SectionItem;

  constructor(
    private sectionService: SectionService,
    private servService: ServService) {

    this.section = sectionService.getById(2);

    servService.getState()
      .pipe(
        map(list => list.sort((a, b) => a.order! - b.order!))
      )
      .subscribe(data => this.data = data);
  }

  public ngOnInit(): void { }

}
