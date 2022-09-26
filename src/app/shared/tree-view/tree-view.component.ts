import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FileNode, Folder } from '../interfaces/file-node.interface';
import { SharedService } from '../shared.service';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
})
export class TreeViewComponent implements OnInit {
  treeControl = new NestedTreeControl<FileNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FileNode>();
  treeData: FileNode[] = [];
  currentRoute: string = '';
  folder!: Folder;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getNodes();
  }

  getNodes() {
    this.sharedService.listarArbol().subscribe((res) => {
      this.treeData = res.record;
      this.dataSource.data = this.treeData;
    });
  }

  hasChild = (_: number, node: FileNode) =>
    !!node.children && node.children.length > 0;
}
