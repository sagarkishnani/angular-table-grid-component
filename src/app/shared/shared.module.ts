import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DataPropertyGetterPipe } from './table-view/data-property-getter-pipe/data-property-getter.pipe';

import { TableViewComponent } from './table-view/table-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FolderViewComponent } from './folder-view/folder-view.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    TableViewComponent,
    GridViewComponent,
    DataPropertyGetterPipe,
    SidebarComponent,
    TreeViewComponent,
    FolderViewComponent,
    MainPageComponent,
  ],
  exports: [
    GridViewComponent,
    TableViewComponent,
    TreeViewComponent,
    SidebarComponent,
    SharedRoutingModule,
    FolderViewComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    SharedRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTreeModule,
    MatSidenavModule,
  ],
})
export class SharedModule {}
