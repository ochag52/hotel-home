import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../../../../models/mail.service';
import { ModalService } from '../modal.service';


interface Form {
  name: FormControl<string>;
  phone: FormControl<string>;
  email: FormControl<string>;
  other: FormControl<string>;
}


@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: [ './book-modal.component.scss' ]
})
export class BookModalComponent {

  public form!: FormGroup<Form>;


  constructor(
    private readonly fb: FormBuilder,
    private readonly mailService: MailService,
    private readonly modal: ModalService) {

    this.form = this.createForm();
  }


  public onClose(): void {
    this.modal.close();
  }


  public onSubmit(): void {
    if (this.form.valid) {
      let { name, phone, email, other } = this.form.value;

      const p = phone?.replace('+375', '').trim();

      if (!p?.length) {
        phone = '';
      }
      const message = `
      Имя:            ${ name ? name : '-' }

      Тел:            ${ phone ? phone : '-' }

      Email:          ${ email ? email : '-' }

      Дополнительно:  ${ other ? other : '-' }
      `;
      this.mailService.send(message).subscribe(() => this.modal.close());
    }
  }


  private createForm(): FormGroup<Form> {
    return this.fb.nonNullable.group({
      name: [ '' ],
      phone: [ '+375 ' ],
      email: [ '', [ Validators.required, Validators.email ] ],
      other: [ '' ]
    });
  }
}
