import {Component} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminApiService} from '../admin/admin-api.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  // mask: any = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  userForm: FormGroup;

  constructor(private _snackBar: MatSnackBar,
              private fb: FormBuilder,
              private adminApiService: AdminApiService,
              private snackBar: MatSnackBar,
              private dialogRef?: MatDialogRef<AddUserComponent>) {

    this.createForm();
  }

  createForm() {
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.pattern(EMAIL_REGEX)]]
    });
  }

  fromForm() {
  }

  addProspect() {
    if (this.userForm.valid) {
      this.fromForm();
      this.adminApiService.addUser(this.userForm.value)
        .subscribe(() => {
          this.snackBar.open('User record added', 'Ok', {duration: 5000});
        });
      this.dialogRef.close(this.userForm.value);
    }
  }
}

