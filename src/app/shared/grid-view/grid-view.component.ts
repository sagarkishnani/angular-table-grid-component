import { Component, Input, OnInit } from '@angular/core';
import { File } from '../interfaces/file.interface';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css'],
})
export class GridViewComponent {
  hover: boolean = false;

  @Input() files: File[] = [];

  hoverStateIn() {
    this.hover = true;
  }

  hoverStateOut() {
    this.hover = false;
  }
}
