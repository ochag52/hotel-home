import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {ContactItem, ContactType} from '../../../app.interfaces';
import {ContactService} from '../../../models/contact/contact.service';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent implements OnInit {

  public contacts!: ContactItem[];

  constructor(
    private contactService: ContactService) {

    contactService.getState().pipe(
      map(list => list.sort((a, b) => a.order! - b.order!)),
      map(list => {
        list = list.filter(i => i.type === ContactType.phone);
        return [list[0], list[1]];
      })
    )
      .subscribe(data => this.contacts = data);
  }

  public ngOnInit(): void {
  }

}
