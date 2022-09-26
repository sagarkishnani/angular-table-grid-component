import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { File } from '../interfaces/file.interface';
import { TableColumn } from '../interfaces/table-column.interface';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit, AfterViewInit {
  public tableDataSource = new MatTableDataSource<File>([]);
  public displayedColumns: string[] = [];
  @ViewChild(MatPaginator) matPaginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );
  @ViewChild(MatSort) matSort: MatSort = new MatSort();

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() rowActionIcon: string = '';
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: File[]) {
    this.setTableDataSource(data);
  }

  constructor() {}

  ngOnInit(): void {
    const columnNames = this.tableColumns.map(
      (tableColumn: TableColumn) => tableColumn.name
    );
    if (this.rowActionIcon) {
      this.displayedColumns = [this.rowActionIcon, ...columnNames];
    } else {
      this.displayedColumns = columnNames;
    }
  }

  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
  }

  // we need this, in order to make pagination work with *ngIf

  setTableDataSource(data: File[]) {
    this.tableDataSource = new MatTableDataSource<File>(data);
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: any) {
    sortParameters.active = this.tableColumns.find(
      (column) => column.name === sortParameters.active
    )!.dataKey;
    this.sort.emit(sortParameters);
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }
}
