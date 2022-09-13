import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  browse = '';
  
  category(){
    return this.http.get(` http://localhost:3000/careercategory`);
  }
}
