import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  cartState: string[] = ['yellow'];
  colors: string[] = ["red", "blue", "yellow", "yellow","red", "green","red", "green", "blue", "green", "blue", "yellow"];
  inputText: any = ''

  constructor(private colorsService: ColorsService){

  }

  ngOnInit() {
    this.colorsService.getColors().subscribe((res) => {
      console.log('get done')

      console.log(res);
    })

    this.colorsService.postColors({colors:"blue"}).subscribe((res) => {
      console.log('post done')
      console.log(res);
    })
  }

  updateCart(newData:string){
    this.cartState = [newData, ...this.cartState]
  }

  deleteItemFromCart(idx: number) {
    delete this.cartState[idx];
    console.log(this.cartState);
  }  
}
