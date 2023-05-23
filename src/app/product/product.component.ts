import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../product';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productService: ProductService = inject(ProductService)
  @Input() product!: Product;
  
  constructor() {
    
  }
}
