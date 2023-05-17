import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  standalone: true,
  imports: [CommonModule, ProductComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productList: Product[] = []
  productService: ProductService = inject(ProductService)

  constructor() {
    this.productService.getProducts().then((productList:Product[]) => {
      this.productList = productList
    })
  }
}
