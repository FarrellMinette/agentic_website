import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-residential',
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
        <a routerLink="/residential/about-us">About Us</a>
        <a routerLink="/residential/contact-info">Contact Info</a>
        <a routerLink="/residential/gallery">Gallery</a>
      </nav>
    </section>

    <section id="about_us" class="about-section">
      <h2>About Bella Rosa Village Residential</h2>
      <p>Bella Rosa Village is a security complex designed for privacy and space, featuring Italian village-inspired architecture by Dennis Moss Partnership in association with EBESA Architects, developed by Propergation Estates, Atterbury and Power Developments. Located on Durban Road, it offers direct access to Tyger Valley Centre, High Street Shopping Village, schools, and medical facilities, with easy highway access. Residents enjoy a tranquil environment with cobbled walkways, indigenous landscaping, bustling bird life, water features, and a state-of-the-art lifestyle centre (reception, boardroom, lounges, mini-theatre, full kitchen, braai facilities, squash courts, fully-equipped gymnasium with bio-kinetic instructor/personal trainer, children's swimming pool). Security is paramount with 24-hour patrol, front gate security, and commanding portals for easy access control. Six prime erven are still available for building dream homes.</p>
    </section>

    <section id="services" class="services-section">
      <h2>Residential Services</h2>
      <ul>
        <li>Prime erven for sale (6 remaining)</li>
        <li>Opportunity to build dream house</li>
      </ul>
    </section>

    <section id="gallery" class="container card">
      <h2>Residential Gallery Categories</h2>
      <ul>
        <li>Exterior</li>
        <li>Lifestyle Centre</li>
        <li>Water Features & Blooms</li>
      </ul>
    </section>

    <section id="contact_info" class="contact-info">
      <h2>Residential Contact Information</h2>
      <div class="contact-grid">
        <div class="contact-card">
          <h3>Managing Agents</h3>
          <p>Propergation Estates</p>
          <p>Phone: <a href="tel:0219146444">021-914 6444</a></p>
          <p>Email: <a href="mailto:management&#64;bellarosa.co.za">management&#64;bellarosa.co.za</a></p>
          <p>Website: <a href="http://www.propergation.co.za" target="_blank" rel="noopener noreferrer">www.propergation.co.za</a></p>
        </div>
        <div class="contact-card">
          <h3>Residential Agent</h3>
          <p>Deon Arp</p>
          <p>Phone: <a href="tel:0826515856">082 651 5856</a></p>
        </div>
        <div class="contact-card">
          <h3>Residential Agent</h3>
          <p>Herman Stemmet</p>
          <p>Phone: <a href="tel:0822570201">082 257 0201</a></p>
        </div>
        <div class="contact-card">
          <h3>Residential Agent (General)</h3>
          <p>Email: <a href="mailto:info&#64;elementsrealestate.co.za">info&#64;elementsrealestate.co.za</a></p>
        </div>
        <div class="contact-card">
          <h3>Caretaker</h3>
          <p>Leon Dekker</p>
          <p>Phone: <a href="tel:0219148347">021-914 8347</a> / <a href="tel:0847492000">084 749 2000</a></p>
        </div>
        <div class="contact-card">
          <h3>Security</h3>
          <p>Phone: <a href="tel:0219144947">021-914 4947</a></p>
        </div>
      </div>
    </section>
  </main>
  `,
})
export class ResidentialComponent {}
