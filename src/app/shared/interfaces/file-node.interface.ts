export interface Record {
  record: FileNode[];
}

export interface FileNode {
  name: string;
  path: string;
  folder: Folder;
  children?: FileNode[];
}

export interface Folder {
  id: string;
  level: string;
}
