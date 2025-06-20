import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://clusterin.site/server/ccn';

  constructor(private http: HttpClient) { }

  // Contoh method GET
  getGuest(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<any>(`${this.apiUrl}/guest`, { headers }).pipe(
      map(response => response.data) // Ambil hanya bagian data
    );
  }

  getPengajuan(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<any>(`${this.apiUrl}/pengajuan`, { headers }).pipe(
      map(response => response.data) // Ambil hanya bagian data
    );
  }

  // Contoh method POST
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.apiUrl}/endpoint-spesifik`, data, { headers });
  }
}