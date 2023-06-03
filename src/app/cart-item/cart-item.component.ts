import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CartItem } from '../product';
import { ProductService } from '../product.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  productService: ProductService = inject(ProductService);
  quantity: number = 1;

  ngOnInit() {
    this.quantity = this.cartItem.quantity
  }

  constructor() {}

  increment() {
    this.quantity += 1;
  }

  decrement() {
    if (this.quantity === 1) {
      return;
    }
    this.quantity -= 1;
  }
}
