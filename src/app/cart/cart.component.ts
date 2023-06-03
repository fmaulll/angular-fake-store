import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartItem } from '../product';

@Component({
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartList: CartItem[] = []

  constructor() {
    this.cartList = JSON.parse(localStorage.getItem('cart')!)
    console.log(this.cartList)
  }
}
