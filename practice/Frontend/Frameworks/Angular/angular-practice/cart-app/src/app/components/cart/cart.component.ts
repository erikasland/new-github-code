import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  @Input() cart: string[];
  @Output() onDelete = new EventEmitter()

  deleteItem(idx:number) {
    this.onDelete.emit(idx);
  }

}