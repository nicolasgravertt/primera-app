import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../models/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL: string = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit: number = 5) {
    const productsUrl: string = `${this.baseURL}products?limit=${limit}`;
    return this.http.get<Product[]>(productsUrl);
  }

  createProduct(product: Product) {
    const productsUrl: string = `${this.baseURL}products`;
    return this.http.post<Product>(productsUrl, product);
  }
}
