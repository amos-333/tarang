import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  addResult(result: any) {
    return this.http.post<any>('http://localhost:8080/users/postResult', result);
  }
  getAllResult() {
    return this.http.get<any>('http://localhost:8080/users/getAllResult');
  }
  deleteOneResult(id:any){
    return this.http.post<any>('http://localhost:8080/users/deleteResult',id);

  }
}
