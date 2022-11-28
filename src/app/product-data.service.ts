import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Productos } from './product-list/Product';
const URL = 'https://637e779fcfdbfd9a63b1d1d9.mockapi.io/products'
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }




  public getALL(): Observable<Productos[]> {
  return this.http.get<Productos[]>(URL).pipe(tap( (products: Productos[]) => products.forEach(Productos => Productos.cantidad = 0 )));


  }
}
