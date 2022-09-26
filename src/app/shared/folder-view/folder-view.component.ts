import { Component, Input } from '@angular/core';
import { File } from '../interfaces/file.interface';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.css'],
})
export class FolderViewComponent {
  constructor(private router: Router) {}

  hover: boolean = false;

  @Input() files: File[] = [];
  @Input() level: string = '';

  getFolderById(id: string) {
    this.router.navigate([`${id}`]);
  }
}
