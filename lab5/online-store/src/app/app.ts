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
  showMaxRatingOnly: boolean = false;

  constructor(private readonly productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.updateSelectedProducts();
  }


  toggleMaxRating(): void {
    this.showMaxRatingOnly = !this.showMaxRatingOnly;
    this.updateSelectedProducts();
  }

  private updateSelectedProducts(): void {
    if (this.selectedCategoryId === null) {
      this.selectedProducts = [];
      return;
    }

    if (this.showMaxRatingOnly) {
      const maxRatingProduct = this.productService.getMaxRatingProductByCategory(this.selectedCategoryId);
      this.selectedProducts = maxRatingProduct ? [maxRatingProduct] : [];
    } else {
      this.selectedProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }
}

export { AppComponent as App };