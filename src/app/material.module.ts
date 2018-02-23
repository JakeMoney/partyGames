import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      MatIconModule,
      MatToolbarModule,
    ],
    exports: [
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      MatIconModule,
      MatToolbarModule,
    ],
})

export class MaterialModule {

}
