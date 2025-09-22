import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commercial-about',
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
      <h1>Commercial Overview</h1>
      <nav class="sub-page-navigation">
        <a routerLink="/commercial/about-us" class="active">About Us</a>
        <a routerLink="/commercial/gallery">Gallery</a>
        <a routerLink="/commercial/rates">Rates</a>
        <a routerLink="/commercial/contact-info">Contact Info</a>
      </nav>
    </section>

    <section class="about-section">
      <h2>About Bella Rosa Village</h2>
      <p>Bella Rosa Village is a R300 million mixed-use development in Tyger Valley, completed in 2009, comprising 13,500m2 of A-grade offices, 210 residential units, and 21 single residential erven. Developed by Propergation Estates, Power Developments, and Atterbury Cape, it offers a prestigious business address with Italian village-inspired architecture, a state-of-the-art lifestyle centre (boardroom, auditorium, juice bar, restaurant, braai, training pool, squash courts, fully equipped gymnasium with bio-kinetic instructor/personal trainer), and 24-hour security (CCTV, patrol, front gate security, manned portals, access control, secure parking, fully fenced). Its prime location on Durban Road provides excellent visibility and easy access to major highways and Cape Town amenities, making it a most sought-after business address.</p>
    </section>
  </main>
  `,
})
export class CommercialAboutComponent {}
