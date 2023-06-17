import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private _http: HttpClient) {}

  getAllPosts() :Observable<any>{
    return this._http.get(`${this.apiUrl}/posts`);
  }
  getAllComments() :Observable<any>{
    return this._http.get(`${this.apiUrl}/comments`);
  }
  getPostById(id: number) :Observable<any> {
    return this._http.get(`${this.apiUrl}/posts/${id}`);
  }
  postPosts(endpoint: string, data: any){
    return this._http.post(`${this.apiUrl}/${endpoint}`, data);
  }

  delete<T>(id:number): Observable<T> {
    return this._http.delete<T>(`${this.apiUrl}`);
  }
}
