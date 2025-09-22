import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commercial',
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
      <h1>Commercial Opportunities</h1>

      <nav class="sub-page-nav">
        <a routerLink="/commercial/about-us">About Us</a>
        <a routerLink="/commercial/rates">Rates</a>
        <a routerLink="/commercial/gallery">Gallery</a>
        <a routerLink="/commercial/contact-info">Contact Info</a>
      </nav>

      <div class="about-section">
        <h2>About Bella Rosa Village Commercial</h2>
        <p>Bella Rosa Village is a R300 million mixed-use development in Tyger Valley, completed in 2009, comprising 13,500m2 of A-grade offices, 210 residential units, and 21 single residential erven. Developed by Propergation Estates, Power Developments, and Atterbury Cape, it offers a prestigious business address with Italian village-inspired architecture, a state-of-the-art lifestyle centre (boardroom, auditorium, juice bar, restaurant, braai, training pool, squash courts, fully equipped gymnasium with bio-kinetic instructor/personal trainer), and 24-hour security (CCTV, patrol, front gate security, manned portals, access control, secure parking, fully fenced). Its prime location on Durban Road provides excellent visibility and easy access to major highways and Cape Town amenities, making it a most sought-after business address.</p>
      </div>

      <div class="services-section">
        <h2>Our Commercial Services</h2>
        <ul>
          <li>Sectional Title Offices For Sale/To Let</li>
          <li>A-grade office space</li>
          <li>Limited office and retail opportunities available</li>
          <li>Secure office environment</li>
          <li>Easy access & good visibility from Durban Road</li>
          <li>Excellent signage exposure</li>
          <li>Free gym membership</li>
          <li>Lifestyle Centre with conferencing facilities</li>
        </ul>
      </div>

      <div class="card">
        <h2>Commercial Rates</h2>
        <p>Sales prices and rental tariffs to be confirmed</p>
      </div>

      <div class="card">
        <h2>Commercial Gallery Categories</h2>
        <ul>
          <li>Balconies</li>
          <li>Exterior</li>
          <li>Interior</li>
          <li>Lifestyle Centre</li>
          <li>Pool Area</li>
          <li>Gym Area</li>
        </ul>
      </div>

      <div class="contact-info">
        <h2>Commercial Contact Information</h2>
        <div class="contact-grid">
          <div class="contact-card">
            <h3>Managing Agents</h3>
            <p><strong>Company:</strong> Propergation Estates</p>
            <p><strong>Phone:</strong> 021-914 6444</p>
            <p><strong>Email:</strong> <a href="mailto:management&#64;bellarosa.co.za">management&#64;bellarosa.co.za</a></p>
            <p><strong>Website:</strong> <a href="http://www.propergation.co.za" target="_blank">www.propergation.co.za></a></p>
          </div>
          <div class="contact-card">
            <h3>Commercial Agent</h3>
            <p><strong>Name:</strong> Ryan Hutchinson</p>
            <p><strong>Phone:</strong> 021 914 6444 / 083 724 3165</p>
            <p><strong>Email:</strong><a href="mailto:ryan&#64;propergation.co.za">ryan&#64;propergation.co.za</a></p>
          </div>
          <div class="contact-card">
            <h3>Sales & Leasing Manager</h3>
            <p><strong>Name:</strong> Johan Store</p>
            <p><strong>Phone:</strong> 083 724 3165 / 021 914 6444</p>
            <p><strong>Email:</strong> <a href="mailto:johan&#64;propergation.co.za">johan&#64;propergation.co.za</a></p>
          </div>
          <div class="contact-card">
            <h3>Caretaker</h3>
            <p><strong>Name:</strong> Leon Dekker</p>
            <p><strong>Phone:</strong> 021-914 8347 / 084 749 2000</p>
          </div>
          <div class="contact-card">
            <h3>Security</h3>
            <p><strong>Phone:</strong> 021-914 4947</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  `,
})
export class CommercialComponent {}
