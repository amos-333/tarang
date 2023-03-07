import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  addResult(result: any) {
    return this.http.post<any>(
      'http://3.1.198.46:3090/users/postResult',
      result
    );
  }
  getAllResult() {
    return this.http.get<any>('http://3.1.198.46:3090/users/getAllResult');
  }
  deleteOneResult(id: any) {
    return this.http.post<any>('http://3.1.198.46:3090/users/deleteResult', id);
  }
  getOneResult(event: any) {
    return this.http.post<any>('http://3.1.198.46:3090/users/oneResult', event);
  }
  getOverall() {
    return this.http.get<any>('http://3.1.198.46:3090/users/overall');
  }
}
