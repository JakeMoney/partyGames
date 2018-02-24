import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-room-dialog',
  templateUrl: './join-room-dialog.component.html',
  styleUrls: ['./join-room-dialog.component.scss']
})
export class JoinRoomDialogComponent implements OnInit {
  public joinFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<JoinRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.joinFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      roomKey: ['', [Validators.required]]
    });
  }
}
