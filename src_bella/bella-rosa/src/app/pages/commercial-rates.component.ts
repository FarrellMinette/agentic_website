import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commercial-rates',
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
      <h1>Commercial Rates</h1>

      <nav class="sub-page-navigation">
        <a routerLink="/commercial/about-us">About Us</a>
        <a routerLink="/commercial/gallery">Gallery</a>
        <a routerLink="/commercial/rates" class="active">Rates</a>
        <a routerLink="/commercial/contact-info">Contact Info</a>
      </nav>

      <div class="card">
        <p>Sales prices and rental tariffs to be confirmed</p>
      </div>
    </section>
  </main>
  `,
})
export class CommercialRatesComponent {}
