import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllCattle } from '../models/cattle.model';
import { IResumeCattle } from '../models/cattleResume.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private baseUrl: string = "http://localhost:8080/"

  //Cattles

  getAllCattles(): Observable<IAllCattle[]> {
    return this._http.get<IAllCattle[]>(`${this.baseUrl}cattle/all`);
  }

  getCattle(id: number): Observable<IAllCattle> {
    return this._http.get<IAllCattle>(`${this.baseUrl}cattle/${id}`);
  }

  getCattles(): Observable<IAllCattle[]> {
    return this._http.get<IAllCattle[]>(`${this.baseUrl}cattle/cattles`);
  }

  getResume(): Observable<IResumeCattle[]> {
    return this._http.get<IResumeCattle[]>(`${this.baseUrl}cattle/resume`);
  }
}
