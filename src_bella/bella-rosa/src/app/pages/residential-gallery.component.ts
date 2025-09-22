import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-residential-gallery',
  standalone: true,
  imports: [RouterLink, CommonModule],
  styles: [`
    .carousel-image { opacity: 0; }
    .carousel-image.active { opacity: 1; }
  `],
  template: `
  <header>
    <nav class="top-nav">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/commercial">Commercial</a></li>
        <li><a routerLink="/residential" class="active">Residential</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="container">
      <h1>Residential Gallery</h1>

      <nav class="sub-page-nav">
        <a routerLink="/residential/about-us">About Us</a>
        <a routerLink="/residential/gallery" class="active">Gallery</a>
        <a routerLink="/residential/contact-info">Contact Info</a>
      </nav>

      <section class="image-gallery-carousel">
        <div class="carousel-container">
          <button class="carousel-btn prev-btn" (click)="prev()">&lt;</button>
          <div class="carousel-inner">
            <img *ngFor="let url of urls; let i = index" [src]="url" alt="Gallery Image" class="carousel-image" [class.active]="i === index()" />
          </div>
          <button class="carousel-btn next-btn" (click)="next()">&gt;</button>
        </div>
      </section>
    </section>
  </main>
  `,
})
export class ResidentialGalleryComponent {
  urls = [
    'assets/images/residential/lifestyle1.jpg',
    'assets/images/residential/lifestyle2.jpg',
    'assets/images/residential/lifestyle3.jpg',
    'assets/images/residential/lifestyle4.jpg',
  ];
  index = signal(0);
  prev() { this.index.set((this.index() - 1 + this.urls.length) % this.urls.length); }
  next() { this.index.set((this.index() + 1) % this.urls.length); }
}
