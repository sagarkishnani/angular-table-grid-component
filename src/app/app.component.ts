import { Component, OnInit } from '@angular/core';
import { Country } from './shared/interfaces/pais.interface';
import { SharedService } from './shared/shared.service';
import { TableColumn } from './shared/interfaces/table-column.interface';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  paises: Country[] = [];
  datos: any[] = [];
  gridView: boolean = false;
  tableView: boolean = false;
  paisesTableColumns: TableColumn[] = [];

  constructor(private paisService: SharedService) {}

  ngOnInit(): void {
    this.getPaises();

    this.paisesTableColumns = [
      {
        name: 'Nombre',
        dataKey: 'cca3',
        isSortable: true,
      },
      {
        name: 'Apellido',
        dataKey: 'cca2',
        isSortable: true,
      },
    ];
  }

  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction === 'asc') {
      return (this.paises = this.paises.sort((a: any, b: any) =>
        a[keyName].localeCompare(b[keyName])
      ));
    } else if (sortParameters.direction === 'desc') {
      return (this.paises = this.paises.sort((a: any, b: any) =>
        b[keyName].localeCompare(a[keyName])
      ));
    } else {
      return this.paises;
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
    this.paisService.listarPaises().subscribe((res) => {
      this.paises = res;
    });
  }
}
