import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartItem } from '../product';
import { ProductService } from '../product.service';

@Component({
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartList: CartItem[] = []
  productService: ProductService = inject(ProductService)
  totalItems: number = 0;
  totalPrice: number = 0

  constructor() {
    this.cartList = JSON.parse(localStorage.getItem('cart')!)
    this.cartList?.map((item) => {
      this.totalItems += item.quantity
      this.totalPrice += item.total
    })
  }
}
