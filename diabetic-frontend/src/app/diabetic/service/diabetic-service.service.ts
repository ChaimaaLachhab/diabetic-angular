import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diabetic } from '../model/diabetic';

@Injectable({
  providedIn: 'root'
})
export class DiabeticService {
  private apiUrl = 'http://localhost:8083/api/diabetics';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Diabetic[]> {
    return this.http.get<Diabetic[]>(this.apiUrl);
  }

  save(diabetic: Diabetic): Observable<Diabetic> {
    return this.http.post<Diabetic>(this.apiUrl, diabetic);
  }

  deleteDiabetic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDiabetic(id: number): Observable<Diabetic> {
    return this.http.get<Diabetic>(`${this.apiUrl}/${id}`);
  }

  updateDiabetic(id: number, diabetic: Diabetic): Observable<Diabetic> {
    return this.http.put<Diabetic>(`${this.apiUrl}/${id}`, diabetic);
  }

}
