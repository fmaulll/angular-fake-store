import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product: Product | undefined;
  quantity: number = 1;
  total: number | undefined;

  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.productService
      .getProductById(productId)
      .then((product) => {
        this.product = product;
        this.total = product!.price * this.quantity
      });
  }

  increment() {
    this.quantity += 1;
    this.total = this.product!.price * this.quantity
  }

  decrement() {
    if (this.quantity === 1) {
      return;
    }
    this.quantity -= 1;
    this.total = this.product!.price * this.quantity
  }
}
