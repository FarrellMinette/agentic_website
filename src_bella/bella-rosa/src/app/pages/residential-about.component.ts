import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-residential-about',
  standalone: true,
  imports: [RouterLink],
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
      <h1>Residential Living</h1>
      <nav class="sub-page-nav">
        <a routerLink="/residential/about-us" class="active">About Us</a>
        <a routerLink="/residential/gallery">Gallery</a>
        <a routerLink="/residential/contact-info">Contact Info</a>
      </nav>

      <div class="about-section">
        <h2>About Bella Rosa Village</h2>
        <p>Bella Rosa Village is a security complex designed for privacy and space, featuring Italian village-inspired architecture by Dennis Moss Partnership in association with EBESA Architects, developed by Propergation Estates, Atterbury and Power Developments. Located on Durban Road, it offers direct access to Tyger Valley Centre, High Street Shopping Village, schools, and medical facilities, with easy highway access. Residents enjoy a tranquil environment with cobbled walkways, indigenous landscaping, bustling bird life, water features, and a state-of-the-art lifestyle centre (reception, boardroom, lounges, mini-theatre, full kitchen, braai facilities, squash courts, fully-equipped gymnasium with bio-kinetic instructor/personal trainer, children's swimming pool). Security is paramount with 24-hour patrol, front gate security, and commanding portals for easy access control. Six prime erven are still available for building dream homes.</p>
      </div>
    </section>
  </main>
  `,
})
export class ResidentialAboutComponent {}
