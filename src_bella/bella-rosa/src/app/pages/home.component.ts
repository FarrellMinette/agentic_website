import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
  <header>
    <nav class="top-nav">
      <h1>Bella Rosa Village</h1>
      <ul>
        <li><a routerLink="/" class="active">Home</a></li>
        <li><a routerLink="/commercial">Commercial</a></li>
        <li><a routerLink="/residential">Residential</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="container about-section"> 
      <h2>Welcome to Bella Rosa Village</h2>
      <p>Bella Rosa Village is a prestigious mixed-use development offering a unique blend of commercial and residential opportunities in the heart of Tyger Valley. Inspired by Italian village architecture, it provides a secure, tranquil, and sophisticated environment for both business and living. Explore our distinct commercial and residential offerings below.</p>
    </section>

    <section class="container card">
      <h2>Commercial Opportunities</h2>
      <p>Bella Rosa Village is a R300 million mixed-use development in Tyger Valley, completed in 2009, comprising 13,500m2 of A-grade offices, 210 residential units, and 21 single residential erven. Developed by Propergation Estates, Power Developments, and Atterbury Cape, it offers a prestigious business address with Italian village-inspired architecture, a state-of-the-art lifestyle centre (boardroom, auditorium, juice bar, restaurant, braai, training pool, squash courts, fully equipped gymnasium with bio-kinetic instructor/personal trainer), and 24-hour security (CCTV, patrol, front gate security, manned portals, access control, secure parking, fully fenced). Its prime location on Durban Road provides excellent visibility and easy access to major highways and Cape Town amenities, making it a most sought-after business address.</p>
      <p><a routerLink="/commercial">Learn more about Commercial</a></p>
    </section>

    <section class="container card">
      <h2>Residential Living</h2>
      <p>Bella Rosa Village is a security complex designed for privacy and space, featuring Italian village-inspired architecture by Dennis Moss Partnership in association with EBESA Architects, developed by Propergation Estates, Atterbury and Power Developments. Located on Durban Road, it offers direct access to Tyger Valley Centre, High Street Shopping Village, schools, and medical facilities, with easy highway access. Residents enjoy a tranquil environment with cobbled walkways, indigenous landscaping, bustling bird life, water features, and a state-of-the-art lifestyle centre (reception, boardroom, lounges, mini-theatre, full kitchen, braai facilities, squash courts, fully-equipped gymnasium with bio-kinetic instructor/personal trainer, children's swimming pool). Security is paramount with 24-hour patrol, front gate security, and commanding portals for easy access control. Six prime erven are still available for building dream homes.</p>
      <p><a routerLink="/residential">Learn more about Residential</a></p>
    </section>
  </main>
  `,
})
export class HomeComponent {}
