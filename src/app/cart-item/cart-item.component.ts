import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CartItem, Product } from '../product';
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
  product: Product | undefined;
  quantity: number = 1;

  ngOnInit() {
    this.quantity = this.cartItem.quantity
  }

  constructor() {}

  increment() {
    this.quantity += 1;
    this.addToCart()
  }

  decrement() {
    if (this.quantity === 1) {
      return;
    }
    this.quantity -= 1;
    this.addToCart()
  }

  addToCart():void {
    const cart = JSON.parse(localStorage.getItem('cart')!)
    const itemIndex = cart.findIndex((item: any) => item.id === this.product?.id)
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1)
    }
    cart.push({
      ...this.product,
      quantity: this.quantity,
    })

    localStorage.setItem("cart", JSON.stringify(cart))
  }
}
