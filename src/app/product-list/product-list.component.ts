import { Component, OnInit } from '@angular/core';
import { ProductsCartService } from '../products-cart.service';
import { Productos } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
// Productos existe en Product.ts para definir la interfaz que tiene el componente Product

products: Productos [] = [{ 
Nombre: "Logitech G430",
Categoria: "Auricular",
Precio: 12000,
Stock: 2,
image: "assets/images/auricularlogitech.jpg",
clearance: false,
cantidad: 0,


},

{
  Nombre: "Razer Sylom",
  Categoria: "Teclado",
  Precio: 16000,
  Stock: 0,
  image: "assets/images/tecladorazer.jpg",
  clearance: false,
  cantidad: 0,

},

{
  Nombre: "Steelseries V90",
  Categoria: "Mouse",
  Precio: 12000,
  Stock: 2,
  image: "assets/images/mousess.jpg",
  clearance:true,
  cantidad: 0,



},

{
  Nombre: "Steelseries AK47",
  Categoria: "Auricular",
  Precio: 21000,
  Stock: 5,
  image: "assets/images/auricularss.jpg",
  clearance:false,
  cantidad: 0,


},

{
  Nombre: "Genius FIUM",
  Categoria: "Mouse",
  Precio: 4000,
  Stock: 51,
  image: "assets/images/mousegenius.jpg",
  clearance: true,
  cantidad: 0,



},
{
  Nombre: "Razer inalambric",
  Categoria: "Mouse",
  Precio: 42000,
  Stock: 0,
  image: "assets/images/mouserazer.jpg",
  clearance: false,
  cantidad: 0,



}

];
 
 





  constructor(private cart: ProductsCartService ) { 
    
  }

  ngOnInit(): void {
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
