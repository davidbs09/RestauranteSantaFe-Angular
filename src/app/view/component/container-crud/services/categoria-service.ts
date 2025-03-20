import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseUrl = 'https://localhost:4200/categoria';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}