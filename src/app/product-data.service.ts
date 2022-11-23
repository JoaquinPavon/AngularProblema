import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './product-list/Product';
const URL = 'https://pokeapi.co/api/v2/pokemon/'
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }




  public getALL(): Observable<Productos[]> {
  return this.http.get<Productos[]>(URL);


  }
}
