import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './product-list-table.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit():void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }
}
