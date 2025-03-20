import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private baseUrl = 'https://localhost:4200/administrador';
  constructor(private http: HttpClient) {}

  getAdministradores(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}