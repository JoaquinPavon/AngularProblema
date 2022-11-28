import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ProductsCartService } from '../products-cart.service';
import { Productos } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
// Productos existe en Product.ts para definir la interfaz que tiene el componente Product

products!: Productos [];
 
 





  constructor(private cart: ProductsCartService, private dataService: ProductDataService ) { 
    
  }

  ngOnInit(): void {
  this.dataService.getALL().subscribe(data => this.products = data);
  }







addToCart(item: Productos): void {
  this.cart.addToCart(item);
  item.Stock -= item.cantidad;
  item.cantidad = 0;
}




  

DownQuantity (item: Productos){

if (item.cantidad > 0)
  item.cantidad--;

  }


upQuantity(item: Productos){
if (item.cantidad < item.Stock)
  item.cantidad++;

  }

  maxReached(m: string){
    alert(m);

  }
}
function subscribe() {
  throw new Error('Function not implemented.');
}

