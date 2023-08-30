import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() product: Product = {
    title: '',
    price: 0,
    images: [],
    id: 0,
  };
}
