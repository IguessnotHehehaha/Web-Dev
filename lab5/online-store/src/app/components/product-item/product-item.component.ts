import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  selectedIndex: number = 0;

  get selectedImage(): string {
    return this.product.images[this.selectedIndex] ?? this.product.image;
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  prevImage(): void {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  nextImage(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.product.images.length;
  }

  getStars(): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.floor(this.product.rating));
  }

  like(): void {
    this.product.likes += 1;
  }

  delete(): void {
    this.deleteProduct.emit(this.product.id);
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
