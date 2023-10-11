import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/accounts';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(baseUrl);
  }

  get(id: any): Observable<Account> {
    return this.http.get<Account>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    console.log("id",id);
    console.log("data",data);
    
    
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(name: any): Observable<Account[]> {
    return this.http.get<Account[]>(`${baseUrl}?name=${name}`);
  }
}