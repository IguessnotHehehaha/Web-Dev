import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  private readonly PRODUCT_IMAGES = [
    '../../assets/images/first.jpeg',
    '../../assets/images/second.jpeg',
    '../../assets/images/third.jpg',
    '../../assets/images/fourth.jpeg',
  ];

  readonly products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256GB Black Titanium',
      description: 'A17 Pro chip, titanium design, 48MP camera system. ProMotion Always-On display with USB-C and Action Button.',
      price: 649990,
      rating: 4.9,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-titan-106298753/',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 256GB Titanium Gray',
      description: 'Snapdragon 8 Gen 3, built-in S Pen, 200MP camera. 6.8-inch Dynamic AMOLED 2X display with Galaxy AI features.',
      price: 569990,
      rating: 4.8,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-107373110/',
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13" M3 8GB 256GB Midnight 2024',
      description: 'Fanless design with M3 chip and 18-hour battery life. Liquid Retina display at 500 nits with P3 wide colour.',
      price: 679990,
      rating: 4.9,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m3-2024-8-gb-256-gb-ssd-polnochnyi-107829640/',
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim 1TB Digital Edition',
      description: 'Ultra-fast SSD, ray tracing and 4K graphics. DualSense controller with adaptive triggers and haptic feedback.',
      price: 289990,
      rating: 4.7,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1-tb-tsifrovoe-izdanie-belyi-108134806/',
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2nd Generation USB-C',
      description: 'Active Noise Cancellation, Adaptive Transparency, Spatial Audio. USB-C MagSafe case with 30h total battery.',
      price: 149990,
      rating: 4.8,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-usb-c-belyi-106849137/',
    },
    {
      id: 6,
      name: 'Dyson V15 Detect Absolute Cordless Vacuum',
      description: 'Laser reveals hidden dust. Piezo sensor counts particles in real time on the LCD screen. 60 min runtime.',
      price: 449990,
      rating: 4.6,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-zhelto-seryi-101935974/',
    },
    {
      id: 7,
      name: 'Dell XPS 15 9530 Core i7 32GB 1TB RTX 4060',
      description: '15.6-inch 3.5K OLED touch display with NVIDIA RTX 4060. 32GB DDR5 RAM and 1TB NVMe SSD.',
      price: 989990,
      rating: 4.7,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9530-intel-core-i7-13700h-32-gb-1-tb-ssd-serebristyi-106566019/',
    },
    {
      id: 8,
      name: 'Apple iPad Air 11" M2 128GB Wi-Fi Blue 2024',
      description: 'M2 chip with 11-inch Liquid Retina display. Supports Apple Pencil Pro and Magic Keyboard for iPad Air.',
      price: 399990,
      rating: 4.8,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-m2-2024-128-gb-wi-fi-goluboi-108399099/',
    },
    {
      id: 9,
      name: 'Samsung 65" QN95C Neo QLED 4K Smart TV',
      description: 'Quantum Matrix Technology Pro, Neural Quantum Processor 4K, anti-reflection panel and ultra-slim design.',
      price: 899990,
      rating: 4.9,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/samsung-qe65qn95cauxce-65-165-sm-chernyi-105232421/',
    },
    {
      id: 10,
      name: 'GoPro HERO12 Black Action Camera',
      description: '5.3K60 and 4K120 video with HyperSmooth 6.0 stabilisation. Waterproof to 10m, unlimited cloud backup.',
      price: 249990,
      rating: 4.7,
      image: this.PRODUCT_IMAGES[0],
      images: this.PRODUCT_IMAGES,
      link: 'https://kaspi.kz/shop/p/gopro-hero12-black-chernyi-106565152/',
    },
  ];
}