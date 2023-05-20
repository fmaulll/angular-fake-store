import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;
  
  constructor() {
    
  }
}
