import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-room-dialog',
  templateUrl: './create-room-dialog.component.html',
  styleUrls: ['./create-room-dialog.component.scss']
})
export class CreateRoomDialogComponent implements OnInit {
  public nameFormGroup: FormGroup;
  public nameFormControl = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.nameFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
    // console.log(this.data);
  }

}
