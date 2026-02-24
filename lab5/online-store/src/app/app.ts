import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private readonly productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.selectedProducts = this.productService.getProductsByCategory(categoryId);
  }
}

export { AppComponent as App };