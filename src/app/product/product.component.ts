import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;
  
  constructor() {
    
  }
}
