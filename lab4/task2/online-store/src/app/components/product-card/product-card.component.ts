import { Component, Input } from '@angular/core';
import { NgFor, DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  selectedIndex: number = 0;

  get selectedImage(): string {
    return this.product.images[this.selectedIndex];
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  prevImage(): void {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.product.images.length) %
      this.product.images.length;
  }

  nextImage(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.product.images.length;
  }

  getStars(): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.floor(this.product.rating));
  }

  shareOnWhatsApp(): void {
    const text = `Check out this product: ${this.product.name} ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}