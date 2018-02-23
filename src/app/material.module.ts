import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatDividerModule,
      MatIconModule,
      MatInputModule,
      MatToolbarModule,
    ],
    exports: [
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatDividerModule,
      MatIconModule,
      MatInputModule,
      MatToolbarModule,
    ],
})

export class MaterialModule {

}


