import { Component, OnInit } from '@angular/core';
import { Country } from './shared/interfaces/pais.interface';
import { SharedService } from './shared/shared.service';
import { TableColumn } from './shared/interfaces/table-column.interface';
import { Sort } from '@angular/material/sort';
import { File } from './shared/interfaces/file.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  paises: Country[] = [];
  archivos: File[] = [];
  datos: any[] = [];
  gridView: boolean = false;
  tableView: boolean = false;
  showFiller = false;
  paisesTableColumns: TableColumn[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getPaises();
    this.getArchivos();

    this.paisesTableColumns = [
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
        name: 'Subidor por',
        dataKey: 'uploadedBy',
        isSortable: true,
      },
    ];
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

  getPaises() {
    this.sharedService.listarPaises().subscribe((res) => {
      this.paises = res;
    });
  }

  getArchivos() {
    this.sharedService.listarArchivos().subscribe((res) => {
      this.archivos = res.record;
    });
  }
}
