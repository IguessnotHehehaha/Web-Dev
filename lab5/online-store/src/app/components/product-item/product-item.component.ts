import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

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
