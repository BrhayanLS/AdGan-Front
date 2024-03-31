import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllCattle, IResumeCattle, ISoldCattle } from '../models/cattle.model';
import { IAllOwner } from '../models/owner.model';
import { IAllSale } from '../models/sale.model';

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

  getSold(): Observable<ISoldCattle[]> {
    return this._http.get<ISoldCattle[]>(`${this.baseUrl}cattle/sold`);
  }

  getNotAvailable(): Observable<IAllCattle[]> {
    return this._http.get<IAllCattle[]>(`${this.baseUrl}cattle/dead`);
  }

  //Owners

  getAllOwners(): Observable<IAllOwner[]> {
    return this._http.get<IAllOwner[]>(`${this.baseUrl}owner/all`);
  }

  getOwner(id: number): Observable<IAllOwner> {
    return this._http.get<IAllOwner>(`${this.baseUrl}owner/${id}`);
  }

  getOwners(): Observable<IAllOwner[]> {
    return this._http.get<IAllOwner[]>(`${this.baseUrl}owner`);
  }

  //Sales

  getAllSales(): Observable<IAllSale[]> {
    return this._http.get<IAllSale[]>(`${this.baseUrl}sale/all`);
  }

  getSale(id: number): Observable<IAllSale> {
    return this._http.get<IAllSale>(`${this.baseUrl}sale/${id}`);
  }

  getSales(): Observable<IAllSale[]> {
    return this._http.get<IAllSale[]>(`${this.baseUrl}sale/sales`);
  }
}
