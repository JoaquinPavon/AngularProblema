import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Productos } from '../product-list/Product';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input() cantidad!: number;
  @Input() max!: number;
  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached:  EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
  }

  
  DownQuantity (){

    if (this.cantidad > 0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    
      }
    
    
    upQuantity(){
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
       }
   else {
    
      this.maxReached.emit("se alcanzó el max");
   }
      
}
}