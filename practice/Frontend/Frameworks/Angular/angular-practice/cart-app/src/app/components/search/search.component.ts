import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  @Output() onAddToCart = new EventEmitter<string>()
  @Input() colors:string[]

  onSelectItem(item: string) {
    console.log(item)
    this.onAddToCart.emit(item)
  }
}