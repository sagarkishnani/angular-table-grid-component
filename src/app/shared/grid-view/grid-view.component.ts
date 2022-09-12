import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../interfaces/pais.interface';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css'],
})
export class GridViewComponent {
  @Input() paises: Country[] = [];
}
