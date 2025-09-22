import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commercial-gallery',
  standalone: true,
  imports: [RouterLink],
  template: `
  <header>
    <nav class="top-nav">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/commercial" class="active">Commercial</a></li>
        <li><a routerLink="/residential">Residential</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="container">
      <h1>Commercial Gallery</h1>

      <nav class="sub-page-navigation">
        <a routerLink="/commercial/about-us">About Us</a>
        <a routerLink="/commercial/gallery" class="active">Gallery</a>
        <a routerLink="/commercial/rates">Rates</a>
        <a routerLink="/commercial/contact-info">Contact Info</a>
      </nav>

      <div class="card">
        <h2>Explore Our Commercial Spaces</h2>
        <p>Discover the elegance and functionality of Bella Rosa Village's commercial offerings through our curated gallery categories. Each category showcases the meticulous design and quality craftsmanship that defines our properties.</p>
      </div>

      <section class="services-section">
        <h2>Gallery Categories</h2>
        <ul>
          <li>Balconies</li>
          <li>Exterior</li>
          <li>Interior</li>
          <li>Lifestyle Centre</li>
          <li>Pool Area</li>
          <li>Gym Area</li>
        </ul>
      </section>
    </section>
  </main>
  `,
})
export class CommercialGalleryComponent {}
