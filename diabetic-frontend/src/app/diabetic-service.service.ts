import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diabetic } from '../model/diabetic';

@Injectable({
  providedIn: 'root'
})
export class DiabeticService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Diabetic[]> {
    return this.http.get<Diabetic[]>(this.apiUrl);
  }

  save(user: Diabetic): Observable<Diabetic> {
    return this.http.post<Diabetic>(this.apiUrl, user);
  }

  deleteDiabetic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
