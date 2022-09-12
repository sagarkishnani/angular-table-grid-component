import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataPropertyGetterPipe } from './table-view/data-property-getter-pipe/data-property-getter.pipe';

import { TableViewComponent } from './table-view/table-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [TableViewComponent, GridViewComponent, DataPropertyGetterPipe],
  exports: [GridViewComponent, TableViewComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
