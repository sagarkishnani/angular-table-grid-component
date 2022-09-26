import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folder } from './interfaces/file-node.interface';
import { File, Record } from './interfaces/file.interface';
import { Country } from './interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private fileUrl: string = 'https://api.jsonbin.io/v3/b';
  private data: any = undefined;

  constructor(private http: HttpClient) {}

  listarPaises(): Observable<Country[]> {
    const url = `${this.apiUrl}/all`;

    return this.http.get<Country[]>(url);
  }

  listarArchivos(): Observable<Record> {
    const url = `${this.fileUrl}/631f5a6c5c146d63ca98dd79`;

    return this.http.get<Record>(url);
  }

  listarArbol(): Observable<any> {
    const url = `${this.fileUrl}/631fa30ba1610e638628bfc3`;

    return this.http.get<any>(url);
  }

  getFolderById(id: string): Observable<any> {
    return this.http.get<any>(`${this.fileUrl}/${id}`);
  }
}
