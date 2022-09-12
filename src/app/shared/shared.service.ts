import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  listarPaises(): Observable<Country[]> {
    const url = `${this.apiUrl}/all`;

    return this.http.get<Country[]>(url);
  }
}
