import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Folder } from '../../interfaces/file-node.interface';
import { File } from '../../interfaces/file.interface';
import { SharedService } from '../../shared.service';
import { TableColumn } from '../../interfaces/table-column.interface';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  archivos: File[] = [];
  folder!: Folder;
  currentRoute: string = '';
  level: string = '';
  hasFile: string = '';
  gridView: boolean = false;
  tableView: boolean = true;
  filesTableColumns: TableColumn[] = [];

  constructor(private sharedService: SharedService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url.substring(1);
        this.getFolderById();
      }
    });
  }

  ngOnInit(): void {
    this.filesTableColumns = [
      {
        name: 'Nombre',
        dataKey: 'name',
        isSortable: true,
      },
      {
        name: 'Código',
        dataKey: 'code',
        isSortable: true,
      },
      {
        name: 'Estado',
        dataKey: 'status',
        isSortable: true,
      },
      {
        name: 'Subido por',
        dataKey: 'uploadedBy',
        isSortable: true,
      },
    ];
  }

  getFolderById() {
    this.sharedService.getFolderById(this.currentRoute).subscribe((res) => {
      this.archivos = res.record.data;
      this.level = res.record.info.level;
      this.hasFile = res.record.info.hasFile;
    });
  }

  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction === 'asc') {
      return (this.archivos = this.archivos.sort((a: any, b: any) =>
        a[keyName].localeCompare(b[keyName])
      ));
    } else if (sortParameters.direction === 'desc') {
      return (this.archivos = this.archivos.sort((a: any, b: any) =>
        b[keyName].localeCompare(a[keyName])
      ));
    } else {
      return this.archivos;
    }
  }

  showGridView(): void {
    this.gridView = true;
    this.tableView = false;
  }

  showTableView(): void {
    this.tableView = true;
    this.gridView = false;
  }
}
