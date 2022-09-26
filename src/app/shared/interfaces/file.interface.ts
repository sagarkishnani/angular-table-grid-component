export interface Record {
  record: File[];
}
export interface File {
  id: string;
  name: string;
  code: string;
  status: string;
  uploadedBy: string;
  icon: string;
}
