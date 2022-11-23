import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Productos } from '../product-list/Product';
import { ProductsCartService } from '../products-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
ShopList$!: Observable<Productos[]>;

  constructor(private cart: ProductsCartService ) {

this.ShopList$ = cart.ShopList.asObservable();



   }

  ngOnInit(): void {
  }

}
