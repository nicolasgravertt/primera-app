import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/Products';
import { ProductService } from 'src/app/services/api/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({
      next: (data: Product[]) => {
        console.log(data);
      },
    });
  }
}
