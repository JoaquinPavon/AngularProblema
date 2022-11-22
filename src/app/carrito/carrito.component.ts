import { Component, OnInit } from '@angular/core';
import { Productos } from '../product-list/Product';
import { ProductsCartService } from '../products-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
ShopList: Productos[] = [];

  constructor(private cart: ProductsCartService ) {
cart.ShopList.subscribe(c => this.ShopList = c);




   }

  ngOnInit(): void {
  }

}
