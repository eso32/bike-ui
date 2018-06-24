import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from '../models/Bike.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes(): Observable<any> {
    return this.http.get('/server/api/v1/list');
  }

  getBike(id: number): Observable<any> {
    return this.http.get(`/server/api/v1/${id}`);
  }

  saveBike(bike: Bike): Observable<any> {
    console.log('test in servcie');
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/save/', body, httpOptions);
  }
}
