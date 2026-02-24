import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly images = [
    '/assets/images/first.jpeg',
    '/assets/images/second.jpeg',
    '/assets/images/third.jpg',
    '/assets/images/fourth.jpeg',
  ];

  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private readonly products: Product[] = [
    // Smartphones
    { id: 1, name: 'Apple iPhone 15 Pro Max 256GB', description: 'A17 Pro, titanium body.', price: 649990, rating: 4.9, image: this.images[0], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Apple%20iPhone%2015%20Pro%20Max%20256GB', likes: 0, categoryId: 1 },
    { id: 2, name: 'Samsung Galaxy S24 Ultra 256GB', description: 'Snapdragon 8 Gen 3, S Pen.', price: 569990, rating: 4.8, image: this.images[1], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Samsung%20Galaxy%20S24%20Ultra%20256GB', likes: 0, categoryId: 1 },
    { id: 3, name: 'Xiaomi 14 Ultra 512GB', description: 'Flagship camera phone.', price: 499990, rating: 4.7, image: this.images[2], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Xiaomi%2014%20Ultra%20512GB', likes: 0, categoryId: 1 },
    { id: 4, name: 'Google Pixel 8 Pro 128GB', description: 'Pure Android experience.', price: 459990, rating: 4.7, image: this.images[3], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Google%20Pixel%208%20Pro%20128GB', likes: 0, categoryId: 1 },
    { id: 5, name: 'OnePlus 12 256GB', description: 'Fast charging, AMOLED.', price: 389990, rating: 4.6, image: this.images[0], images: this.images, link: 'https://kaspi.kz/shop/search/?text=OnePlus%2012%20256GB', likes: 0, categoryId: 1 },

    // Laptops
    { id: 6, name: 'MacBook Air 13 M3 8/256', description: 'Lightweight M3 laptop.', price: 679990, rating: 4.9, image: this.images[1], images: this.images, link: 'https://kaspi.kz/shop/search/?text=MacBook%20Air%2013%20M3%208GB%20256GB', likes: 0, categoryId: 2 },
    { id: 7, name: 'Dell XPS 15 9530 i7', description: 'Premium OLED display.', price: 989990, rating: 4.7, image: this.images[2], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Dell%20XPS%2015%209530', likes: 0, categoryId: 2 },
    { id: 8, name: 'Lenovo Legion 5', description: 'Gaming performance.', price: 599990, rating: 4.7, image: this.images[3], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Lenovo%20Legion%205', likes: 0, categoryId: 2 },
    { id: 9, name: 'ASUS ROG Zephyrus G14', description: 'Compact gaming laptop.', price: 749990, rating: 4.8, image: this.images[0], images: this.images, link: 'https://kaspi.kz/shop/search/?text=ASUS%20ROG%20Zephyrus%20G14', likes: 0, categoryId: 2 },
    { id: 10, name: 'HP Spectre x360 14', description: 'Convertible ultrabook.', price: 629990, rating: 4.6, image: this.images[1], images: this.images, link: 'https://kaspi.kz/shop/search/?text=HP%20Spectre%20x360%2014', likes: 0, categoryId: 2 },

    // Headphones
    { id: 11, name: 'AirPods Pro 2 USB-C', description: 'ANC and spatial audio.', price: 149990, rating: 4.8, image: this.images[2], images: this.images, link: 'https://kaspi.kz/shop/search/?text=AirPods%20Pro%202%20USB-C', likes: 0, categoryId: 3 },
    { id: 12, name: 'Sony WH-1000XM5', description: 'Top-class ANC.', price: 199990, rating: 4.9, image: this.images[3], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Sony%20WH-1000XM5', likes: 0, categoryId: 3 },
    { id: 13, name: 'Bose QuietComfort Ultra', description: 'Premium comfort.', price: 229990, rating: 4.7, image: this.images[0], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Bose%20QuietComfort%20Ultra', likes: 0, categoryId: 3 },
    { id: 14, name: 'Samsung Galaxy Buds2 Pro', description: 'Compact ANC earbuds.', price: 89990, rating: 4.6, image: this.images[1], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Samsung%20Galaxy%20Buds2%20Pro', likes: 0, categoryId: 3 },
    { id: 15, name: 'JBL Tune 770NC', description: 'Wireless ANC headset.', price: 59990, rating: 4.5, image: this.images[2], images: this.images, link: 'https://kaspi.kz/shop/search/?text=JBL%20Tune%20770NC', likes: 0, categoryId: 3 },

    // Tablets
    { id: 16, name: 'iPad Air 11 M2 128GB', description: 'M2, Liquid Retina.', price: 399990, rating: 4.8, image: this.images[3], images: this.images, link: 'https://kaspi.kz/shop/search/?text=iPad%20Air%2011%20M2%20128GB', likes: 0, categoryId: 4 },
    { id: 17, name: 'Galaxy Tab S9 128GB', description: 'AMOLED + S Pen.', price: 369990, rating: 4.8, image: this.images[0], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Samsung%20Galaxy%20Tab%20S9%20128GB', likes: 0, categoryId: 4 },
    { id: 18, name: 'Xiaomi Pad 6 128GB', description: '11-inch 144Hz display.', price: 179990, rating: 4.6, image: this.images[1], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Xiaomi%20Pad%206%20128GB', likes: 0, categoryId: 4 },
    { id: 19, name: 'Lenovo Tab P12', description: 'Large media tablet.', price: 169990, rating: 4.5, image: this.images[2], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Lenovo%20Tab%20P12', likes: 0, categoryId: 4 },
    { id: 20, name: 'Huawei MatePad 11.5', description: 'Slim body and stylus support.', price: 159990, rating: 4.5, image: this.images[3], images: this.images, link: 'https://kaspi.kz/shop/search/?text=Huawei%20MatePad%2011.5', likes: 0, categoryId: 4 },
  ];

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }
}