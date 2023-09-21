import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../../../../models/mail.service';
import { ModalService } from '../modal.service';


interface Form {
  message: FormControl<string>;
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
      this.mailService.send(this.form.value.message!).subscribe(() => this.modal.close());
    }
  }


  private createForm(): FormGroup<Form> {
    return this.fb.nonNullable.group({
      message: [ '', [
        Validators.required
      ] ]
    });
  }
}
