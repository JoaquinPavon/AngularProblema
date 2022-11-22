import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Productos } from './product-list/Product';


@Injectable({
  providedIn: 'root'
})
// Maneja la logica del carrito

export class ProductsCartService {

private _ShopList: Productos[] = [];
ShopList: BehaviorSubject<Productos[]> = new BehaviorSubject(this._ShopList);


constructor() { }

addToCart(item: Productos) {
  let items: Productos = this._ShopList.find((v1) => v1.Nombre == item.Nombre)!;
  if(!items) {
    this._ShopList.push({ ... item});
  } else {
    items.cantidad += item.cantidad;
  }
  console.log(this._ShopList);
  this.ShopList.next(this._ShopList);
}



  }






  

