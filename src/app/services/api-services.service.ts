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
  addPost(postData:any){
    return this._http.post(`${this.apiUrl}/posts`, postData)

  }

  delete(id:number): Observable <any> {
    return this._http.delete(`${this.apiUrl}/posts/${id}`);
  }
}
