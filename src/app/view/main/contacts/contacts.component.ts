import { Component, OnInit } from '@angular/core';
import { ContactItem, ContactType } from '../../../app.interfaces';
import { ContactService } from '../../../models/contact/contact.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: [ './contacts.component.scss' ]
})
export class ContactsComponent implements OnInit {

  public contactsTel!: ContactItem[];
  public contactsEmail!: ContactItem[];

  constructor(
    private contactService: ContactService) {

    contactService.getState()
      .pipe(
        map(list => list.sort((a, b) => a.order! - b.order!))
      )
      .subscribe(data => {
        this.contactsTel = data.filter(i => i.type === ContactType.phone);
        this.contactsEmail = data.filter(i => i.type === ContactType.email);
      });
  }

  public ngOnInit(): void { }

}
